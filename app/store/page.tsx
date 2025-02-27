"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/server-actions";
import Navigation from "@/components/Navigation";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { addToCart } = useCart();
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

  if (!products.length) return <p>Loading products...</p>;

  return (
    <div>
      <Navigation />
      <div className="mx-auto container px-4">
        <h1 className="text-2xl font-bold">Shopify Products</h1>
        <ul className="mt-4 space-y-4">
          {products.map(({ node }: any) => {
            const defaultVariantId = node.variants.edges[0]?.node.id || "";
            return (
              <li key={node.id} className="border p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{node.title}</h2>
                <p className="text-gray-600">{node.description}</p>
                {node.images.edges.length > 0 && (
                  <img
                    src={node.images.edges[0].node.src}
                    alt={node.images.edges[0].node.altText}
                    width={200}
                    className="mt-2 rounded"
                  />
                )}

                {/* Size Selection */}
                <div className="mt-2">
                  <h3 className="font-semibold">Select Size:</h3>
                  <div className="flex space-x-2">
                    {node.variants.edges.map(({ node: variant }: any) => (
                      <button
                        key={variant.id}
                        className={`px-3 py-1 border rounded ${
                          selectedVariants[node.id] === variant.id
                            ? "bg-blue-500 text-white"
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
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    const selectedVariantId =
                      selectedVariants[node.id] || defaultVariantId;
                    const selectedVariant = node.variants.edges.find(
                      ({ node }: any) => node.id === selectedVariantId,
                    )?.node;

                    if (!selectedVariant) return;

                    addToCart({
                      variantId: selectedVariant.id,
                      variantTitle: `${node.title} - ${selectedVariant.title == "Default Title" ? "One Size" : selectedVariant.title}`, // Include size
                      title: node.title,
                      quantity: 1,
                      image: node.images.edges[0].node.src,
                      price: selectedVariant.priceV2?.amount,
                      stock: selectedVariant.availableForSale,
                    });
                  }}
                  disabled={!selectedVariants[node.id]} // Disable if no size is selected
                >
                  Add to Cart
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
