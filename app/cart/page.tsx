"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import Link from "next/link";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

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
    <section className="bg-black h-screen relative w-full">
      <Navigation />
      <section className="bg-black py-40">
        <section className="mx-auto container px-4 text-white">
          <p className="text-2xl font-bold">CART</p>
          <Link href="/store">
            <p className="text-lg mt-4">&larr; BACK TO STORE</p>
          </Link>
          <ul className="mt-6 space-y-4 text-black">
            {cart.map((item) => (
              <li
                key={item.variantId}
                className="border p-4 shadow-md flex justify-between items-center bg-[#fff]"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={80}
                    className="rounded"
                  />
                  <div>
                    <p className="uppercase md:text-lg font-semibold">
                      {item.title} ({item.variantTitle}){" "}
                    </p>
                    <p className="text-gray-400">
                      £{Number(item.price).toString() + "0"}
                    </p>
                    <div className="flex items-center mt-2">
                      <Button
                        onClick={() => {
                          if (item.quantity > 1)
                            updateQuantity(item.variantId, item.quantity - 1);
                        }}
                        className="px-2 py-2 h-8 bg-black border-[1px] border-white flex items-center justify-center rounded"
                        disabled={item.quantity === 0}
                      >
                        <FaMinus />
                      </Button>
                      <span className="px-4">{item.quantity}</span>
                      <Button
                        onClick={() => {
                          const newQuantity = item.quantity + 1;
                          updateQuantity(item.variantId, newQuantity);
                        }}
                        className="px-2 py-2 h-8 bg-black border-[1px] border-white flex items-center justify-center rounded"
                        disabled={
                          !item.tags.includes("preorder") &&
                          item.quantity >= item.stock
                        }
                      >
                        <FaPlus />
                      </Button>
                    </div>
                  </div>
                </div>
                <Button onClick={() => removeFromCart(item.variantId)}>
                  <p className="text-lg hidden md:block">REMOVE</p>
                  <p className="text-lg md:hidden">
                    <FaTrash />
                  </p>
                </Button>
              </li>
            ))}
          </ul>
          <hr className="mt-4" />
          <div className="mt-4 md:flex items-center justify-between">
            <p>
              By completing your purchase, you agree to our{" "}
              <Link href="/terms-of-service" className="underline">
                Terms of Service
              </Link>
              .
            </p>
            <div className="md:flex items-center justify-end gap-10">
              <Button
                onClick={checkout}
                className="mt-4 border-[1px] border-white text-white px-6 py-2 rounded w-full md:w-auto text-md"
              >
                <p>CHECKOUT</p>
              </Button>
              <Link href="/store">
                <p className="mt-4 w-full md:w-auto text-center">
                  CONTINUE SHOPPING
                </p>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
}
