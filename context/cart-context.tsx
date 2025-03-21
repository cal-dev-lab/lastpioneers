"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";

// Define Cart Item Type
interface CartItem {
  variantId: string;
  title: string;
  quantity: number;
  image: string;
  price: string;
  stock: number;
  variantTitle: string;
  tags: string;
}

// Define Cart Context Type
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeFromCart: (variantId: string) => void;
  checkout: () => Promise<void>;
}

// Create Context with Default Value
const CartContext = createContext<CartContextType | null>(null);

// Cart Provider Component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    if (cart !== null) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  if (cart === null) {
    return <div className="text-center mt-10">Loading cart...</div>; // Avoids hydration issues
  }

  // const addToCart = (item: CartItem & { stock: number }) => {
  //   setCart((prevCart) => {
  //     const existingItem = prevCart.find((i) => i.variantId === item.variantId);
  //     if (existingItem) {
  //       if (existingItem.quantity < item.stock) {
  //         return prevCart.map((i) =>
  //           i.variantId === item.variantId
  //             ? { ...i, quantity: i.quantity + 1 }
  //             : i,
  //         );
  //       }
  //       return prevCart; // Prevents adding more than stock
  //     }
  //     return [...prevCart, { ...item, quantity: 1 }];
  //   });
  // };
  //
  const addToCart = async (item: CartItem) => {
    return new Promise<void>((resolve) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (i) => i.variantId === item.variantId,
        );

        if (existingItem) {
          return prevCart.map((i) =>
            i.variantId === item.variantId
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          );
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });

      resolve(); // Ensures the function resolves after updating state
    });

    // return { cart, addToCart };
  };

  const updateQuantity = (variantId: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.variantId === variantId
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };

  const removeFromCart = (variantId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.variantId !== variantId),
    );
  };

  const checkout = async () => {
    if (cart.length === 0) {
      console.error("Checkout failed: Cart is empty.");
      alert("Your cart is empty.");
      return;
    }

    try {
      // 🔹 Fetch the latest stock levels before checkout
      const stockCheckQuery = gql`
        query GetVariantStock($ids: [ID!]!) {
          nodes(ids: $ids) {
            ... on ProductVariant {
              id
              availableForSale
            }
          }
        }
      `;

      const { data } = await client.query({
        query: stockCheckQuery,
        variables: { ids: cart.map((item) => item.variantId) },
        fetchPolicy: "no-cache",
      });

      const updatedStock = new Map(
        data.nodes.map((variant: any) => [
          variant.id,
          variant.availableForSale,
        ]),
      );

      // 🔹 Check if any items are out of stock
      const outOfStockItems = cart.filter(
        (item) => !updatedStock.get(item.variantId),
      );

      if (outOfStockItems.length > 0) {
        alert("Some items in your cart are sold out. Please update your cart.");
        return;
      }

      // 🔹 Proceed with checkout
      const cartMutation = gql`
        mutation CartCreate($lines: [CartLineInput!]!) {
          cartCreate(input: { lines: $lines }) {
            cart {
              id
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const { data: checkoutData } = await client.mutate({
        mutation: cartMutation,
        variables: {
          lines: cart.map((item) => ({
            merchandiseId: item.variantId,
            quantity: item.quantity,
          })),
        },
      });

      // 🔹 Handle Errors
      if (checkoutData.cartCreate.userErrors.length > 0) {
        console.error(
          "Shopify Checkout Errors:",
          checkoutData.cartCreate.userErrors,
        );
        alert(
          `Checkout failed: ${checkoutData.cartCreate.userErrors[0].message}`,
        );
        return;
      }

      // 🔹 Redirect to Checkout
      const checkoutUrl = checkoutData.cartCreate.cart?.checkoutUrl;
      if (!checkoutUrl) {
        console.error("Checkout failed: No checkout URL returned.");
        alert("An error occurred. Please try again.");
        return;
      }

      window.location.href = checkoutUrl; // ✅ Redirect to Shopify checkout
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred while processing checkout.");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook to Use Cart Context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
