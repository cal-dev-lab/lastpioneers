"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useCart } from "@/context/cart-context";

export default function Navigation() {
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu if screen is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Stops user scroll when mobile menu is active
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMenu]);

  return (
    <>
      <section
        className={`${isScrolled && "bg-black transition duration-700"} sticky top-0 z-[998] h-20 md:h-32 flex items-center`}
      >
        <section className="hidden md:block mx-auto container px-4">
          <div className="grid grid-cols-3">
            {/* Links */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <p className="text-white">HOME</p>
              </Link>
              <Link href="/tour">
                <p className="text-white">TOUR</p>
              </Link>
              <Link href="/store">
                <p className="text-white">STORE</p>
              </Link>
              {cart.length > 0 && (
                <Link href="/cart">
                  <p className="text-white">CART ({cart.length})</p>
                </Link>
              )}
            </div>
            {/* Logo */}
            <Link href="/">
              <h1 className="text-center text-white text-3xl">
                THE LAST PIONEERS
              </h1>
            </Link>
            {/* Socials */}
            <div className="flex items-center gap-4 justify-end">
              <Link
                href="mailto:contact@thelastpioneers.co.uk?subject=Website Enquiry"
                target="_blank"
                rel="noreferrer noopener"
              >
                <MdEmail className="text-white" />
              </Link>
              <Link
                href="https://facebook.com/thelastpioneers"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook className="text-white" />
              </Link>
              <Link
                href="https://instagram.com/thelastpioneers"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram className="text-white" />
              </Link>
              <Link
                href="https://tiktok.com/@thelastpioneers"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTiktok className="text-white" />
              </Link>
              <Link
                href="https://youtube.com/channel/UCP-4VYYObKUuz8rrDsw9pCg"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaYoutube className="text-white" />
              </Link>
              <Link
                href="https://twitter.com/thelastpioneers"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaXTwitter className="text-white" />
              </Link>
            </div>
          </div>
        </section>

        <section className="flex md:hidden items-center justify-between w-full h-full mx-auto container px-4 -mt-1">
          <Link href="/">
            <h1 className="text-white text-2xl mt-[0.725rem]">
              THE LAST PIONEERS
            </h1>
          </Link>
          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <Link href="/cart">
                <p className="text-white">CART ({cart.length})</p>
              </Link>
            )}
            <p
              onClick={() => setShowMenu(!showMenu)}
              className="text-white text-4xl"
            >
              {showMenu ? <IoCloseSharp /> : <HiBars2 />}
            </p>
          </div>
        </section>
      </section>

      {showMenu && (
        <section className="bg-black min-h-screen w-full text-white fixed left-0 top-0 z-[996] bg-opacity-80 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-screen gap-4">
            <Link href="/">
              <p className="text-3xl">HOME</p>
            </Link>
            <Link href="/tour">
              <p className="text-3xl">TOUR</p>
            </Link>
            <Link href="/store">
              <p className="text-3xl">STORE</p>
            </Link>
            {cart.length > 0 && (
              <Link href="/cart">
                <p className="text-3xl">CART ({cart.length})</p>
              </Link>
            )}
            <div className="flex items-center gap-4 text-3xl mt-20">
              <Link
                href="mailto:contact@thelastpioneers.co.uk?subject=Website Enquiry"
                target="_blank"
                rel="noreferrer noopener"
              >
                <MdEmail className="text-white" />
              </Link>
              <Link
                href="https://facebook.com/thelastpioneers"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook className="text-white" />
              </Link>
              <Link
                href="https://instagram.com/thelastpioneers"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram className="text-white" />
              </Link>
              <Link
                href="https://tiktok.com/@thelastpioneers"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTiktok className="text-white" />
              </Link>
              <Link
                href="https://youtube.com/channel/UCP-4VYYObKUuz8rrDsw9pCg"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaYoutube className="text-white" />
              </Link>
              <Link
                href="https://twitter.com/thelastpioneers"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaXTwitter className="text-white" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* <section
        className={`${showMenu && "hidden"} md:hidden fixed right-4 top-[50%] translate-y-[-50%] z-[999]`}
      >
        <div className=" bg-white text-black p-2 rounded bg-opacity-50 backdrop-blur-lg">
          <Link href="https://facebook.com/thelastpioneers" target="_blank" rel="noreferrer noopener">
            <FaFacebook className="mb-4" />
          </Link>
          <Link href="https://instagram.com/thelastpioneers" target="_blank">
            <FaInstagram className="mb-4" />
          </Link>
          <Link href="https://tiktok.com/@thelastpioneers" target="_blank">
            <FaTiktok className="mb-4" />
          </Link>
          <Link
            href="https://youtube.com/channel/UCP-4VYYObKUuz8rrDsw9pCg"
            target="_blank"
          >
            <FaYoutube className="mb-4" />
          </Link>
          <Link href="https://twitter.com/thelastpioneers" target="_blank">
            <FaXTwitter />
          </Link>
        </div>
      </section> */}
    </>
  );
}
