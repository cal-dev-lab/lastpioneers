"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/server-actions";
import Navigation from "@/components/Navigation";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

export default function Home() {
  const { cart, addToCart } = useCart();
  const { toast } = useToast();

  const [products, setProducts] = useState<any[]>([]);
  const [selectedVariants, setSelectedVariants] = useState<{
    [key: string]: string;
  }>({});

  // Fetch products on mount
  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProducts();
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  if (!products.length) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-black h-screen relative w-full">
      <Navigation />
      <section className="bg-black py-40">
        <section className="mx-auto container px-4 text-black">
          <div className="sm:flex items-center justify-between">
            <p className="text-2xl font-bold text-white">STORE</p>
            <p className="uppercase text-xl font-bold text-white">
              showing {products.length} of {products.length}
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {products.map(({ node }: any) => {
              const defaultVariantId = node.variants.edges[0]?.node.id || "";
              return (
                <li
                  key={node.id}
                  className="border p-4 bg-[#fff] flex flex-col justify-between"
                >
                  {node.images.edges.length > 0 && (
                    <img
                      src={node.images.edges[0].node.src}
                      alt={node.images.edges[0].node.altText}
                      width={200}
                      className="mt-2 rounded w-full h-96 object-contain"
                    />
                  )}

                  <p className="mt-4 text-xl font-semibold uppercase">
                    {node.title}
                  </p>
                  {/* <p className="text-gray-600">{node.description}</p> */}

                  {/* Size Selection */}
                  <div className="mt-2">
                    <p className="font-semibold mb-2">Select Size:</p>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {node.variants.edges.map(({ node: variant }: any) => (
                        <button
                          key={variant.id}
                          className={`px-3 py-1 border rounded ${
                            selectedVariants[node.id] === variant.id
                              ? "bg-black text-white"
                              : "bg-gray-200"
                          } ${variant.quantityAvailable === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                          onClick={() =>
                            setSelectedVariants((prev) => ({
                              ...prev,
                              [node.id]: variant.id,
                            }))
                          }
                          disabled={variant.quantityAvailable === 0} // ✅ Disable if no stock
                        >
                          {variant.title === "Default Title"
                            ? "One Size"
                            : variant.title}{" "}
                          {variant.quantityAvailable === 0 && "(Out of Stock)"}{" "}
                          {/* ✅ Show Out of Stock Message */}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    className="mt-2 text-white px-4 py-2 rounded w-full"
                    onClick={() => {
                      const selectedVariantId =
                        selectedVariants[node.id] || defaultVariantId;
                      const selectedVariant = node.variants.edges.find(
                        ({ node }: any) => node.id === selectedVariantId,
                      )?.node;

                      if (!selectedVariant) return;

                      // ✅ Get current cart state
                      const cartItem = cart.find(
                        (item) => item.variantId === selectedVariant.id,
                      );
                      const currentQuantity = cartItem ? cartItem.quantity : 0;
                      const availableStock = selectedVariant.quantityAvailable;

                      // ✅ Prevent adding more than available stock
                      if (currentQuantity >= availableStock) {
                        toast({
                          title: "Oops!",
                          description: `You can't add more than ${availableStock} of this item.`,
                          variant: "destructive",
                        });
                        return;
                      }

                      // ✅ Add item to cart
                      addToCart({
                        variantId: selectedVariant.id,
                        variantTitle: `${node.title} - ${
                          selectedVariant.title === "Default Title"
                            ? "One Size"
                            : selectedVariant.title
                        }`,
                        title: node.title,
                        quantity: 1,
                        image: node.images.edges[0].node.src,
                        price: selectedVariant.priceV2?.amount,
                        stock: selectedVariant.quantityAvailable,
                      });

                      // ✅ Alert user that item was added successfully
                      toast({
                        title: "Success!",
                        description: `${node.title} - ${
                          selectedVariant.title === "Default Title"
                            ? "One Size"
                            : selectedVariant.title
                        } added to cart successfully!`,
                        className: "bg-black text-white",
                      });
                    }}
                    disabled={!selectedVariants[node.id]}
                  >
                    ADD TO CART
                  </Button>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
      <Footer />
    </section>
  );
}
