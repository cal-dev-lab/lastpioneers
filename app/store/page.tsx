"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/server-actions";
import Navigation from "@/components/Navigation";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";

type Metafield = {
  key: string;
  value: string;
};

export default function Home() {
  const { cart, addToCart } = useCart();

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
            {products?.length > 0 ? (
              products.map(({ node }: any) => {
                const preorderMetafield = node?.metafields?.find(
                  (mf: Metafield) => mf?.key === "preorder",
                );
                const defaultVariantId = node.variants.edges[0]?.node.id || "";

                const selectedVariantId =
                  selectedVariants[node.id] || defaultVariantId;
                const selectedVariant = node.variants.edges.find(
                  ({ node }: any) => node.id === selectedVariantId,
                )?.node;
                return (
                  <li
                    key={node.id}
                    className="border p-4 bg-[#fff] flex flex-col justify-between relative"
                  >
                    {node.tags.includes("preorder") && (
                      <p className="top-2 left-2 absolute bg-black text-white px-2 py-1">
                        PRE-ORDER
                      </p>
                    )}
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

                    <div>
                      {/* Size Selection */}
                      {node.tags.includes("preorder") ? (
                        <div className="mt-2">
                          <p className="font-semibold mb-2">Select Size:</p>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            {node.variants.edges.map(
                              ({ node: variant }: any) => (
                                <button
                                  key={variant.id}
                                  className={`${variant.title === "Default Title" && "col-span-2"} px-3 py-1 border rounded ${
                                    selectedVariants[node.id] === variant.id
                                      ? "bg-black text-white"
                                      : "bg-gray-200"
                                  }`}
                                  onClick={() =>
                                    setSelectedVariants((prev) => ({
                                      ...prev,
                                      [node.id]: variant.id,
                                    }))
                                  }
                                >
                                  {variant.title === "Default Title"
                                    ? "One Size"
                                    : variant.title}{" "}
                                  {variant.quantityAvailable === 0 &&
                                    "(PRE-ORDER)"}{" "}
                                  {/* ✅ Show Out of Stock Message */}
                                </button>
                              ),
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-2">
                          <p className="font-semibold mb-2">Select Size:</p>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            {node.variants.edges.map(
                              ({ node: variant }: any) => (
                                <button
                                  key={variant.id}
                                  className={`${variant.title === "Default Title" && "col-span-2"} px-3 py-1 border rounded ${
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
                                  {variant.quantityAvailable === 0 &&
                                    "(Out of Stock)"}{" "}
                                  {/* ✅ Show Out of Stock Message */}
                                </button>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                      {/* Add to Cart Button */}
                      <Button
                        className="mt-2 text-white px-4 py-2 rounded w-full"
                        onClick={() => {
                          if (!selectedVariant) return;

                          // ✅ Get current cart state
                          const cartItem = cart.find(
                            (item) => item.variantId === selectedVariant.id,
                          );
                          const currentQuantity = cartItem
                            ? cartItem.quantity
                            : 0;
                          const availableStock =
                            selectedVariant.quantityAvailable;

                          if (!node.tags.includes("preorder")) {
                            // ✅ Prevent adding more than available stock
                            if (currentQuantity >= availableStock) {
                              toast(
                                `You can't add more than ${availableStock} of this item.`,
                              );
                              return;
                            }
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
                            tags: node.tags,
                          });

                          toast(
                            `${node.title} - ${
                              selectedVariant.title === "Default Title"
                                ? "One Size"
                                : selectedVariant.title
                            } added to cart successfully!`,
                          );
                        }}
                        disabled={
                          !selectedVariants[node.id] ||
                          (selectedVariant?.quantityAvailable === 0 &&
                            !selectedVariant?.availableForSale)
                        }
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  </li>
                );
              })
            ) : (
              <>
                <section className="flex flex-col gap-2">
                  <Skeleton className="h-96" />
                  <Skeleton className="h-10 w-64" />
                  <Skeleton className="h-8 w-40" />
                  <div className="grid grid-cols-2 gap-2">
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </section>
                <section className="flex flex-col gap-2">
                  <Skeleton className="h-96" />
                  <Skeleton className="h-10 w-64" />
                  <Skeleton className="h-8 w-40" />
                  <div className="grid grid-cols-2 gap-2">
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </section>
                <section className="flex flex-col gap-2">
                  <Skeleton className="h-96" />
                  <Skeleton className="h-10 w-64" />
                  <Skeleton className="h-8 w-40" />
                  <div className="grid grid-cols-2 gap-2">
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </section>
              </>
            )}
          </ul>
        </section>
      </section>
      <Footer />
    </section>
  );
}
