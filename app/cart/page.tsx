"use client";

import { useCart } from "@/context/cart-context";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, checkout } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">Your Cart is Empty</h2>
        <Link href="/store" className="text-blue-500 mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <ul className="mt-4 space-y-4">
        {cart.map((item) => (
          <li
            key={item.variantId}
            className="border p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                width={80}
                className="rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {item.title} ({item.variantTitle}){" "}
                </h2>
                <p className="text-gray-600">{item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => {
                      if (item.quantity > 1)
                        updateQuantity(item.variantId, item.quantity - 1);
                    }}
                    className="px-2 bg-gray-300 rounded"
                    disabled={item.quantity === 0}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => {
                      console.log(
                        `Increasing ${item.variantTitle} from ${item.quantity} to ${item.quantity + 1}`,
                      );
                      updateQuantity(item.variantId, item.quantity + 1);
                    }}
                    className="px-2 bg-gray-300 rounded"
                    disabled={item.quantity >= item.stock} // ✅ Disable if at max stock
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.variantId)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={checkout}
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded"
      >
        Checkout
      </button>
    </div>
  );
}
