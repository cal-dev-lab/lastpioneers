"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaTiktok, FaX, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const links = [
        { name: "Listen", to: "#listen" },
        { name: "About", to: "#about" },
        { name: "Video", to: "#video" },
        { name: "Gallery", to: "#gallery" },
        { name: "Mailing List", to: "#mailing-list" },
        { name: "Contact", to: "#contact" }
    ];

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const mappedLinks = links.map(link => (
        <Link onClick={() => setShowMenu(false)} href={link.to} key={link.name} className="uppercase text-white"><h3>{link.name}</h3></Link>
    ))


    return (
        <>
            <section className="relative z-[998]">
                <nav className={`${isScrolled || showMenu ? "bg-opacity-50 backdrop-blur-lg" : "bg-transparent"}
                flex justify-between fixed top-0 z-[999] h-24 w-full items-center px-4 md:px-10`}>
                    <p className="hidden md:flex items-center gap-4 text-white text-xl">
                        <Link onClick={() => setShowMenu(false)} href="https://facebook.com/thelastpioneers" target="_blank"><FaFacebook /></Link>
                        <Link onClick={() => setShowMenu(false)} href="https://instagram.com/thelastpioneers" target="_blank"><FaInstagram /></Link>
                        <Link onClick={() => setShowMenu(false)} href="https://tiktok.com/@thelastpioneers" target="_blank"><FaTiktok /></Link>
                        <Link onClick={() => setShowMenu(false)} href="https://youtube.com/channel/UCP-4VYYObKUuz8rrDsw9pCg" target="_blank"><FaYoutube /></Link>
                        <Link onClick={() => setShowMenu(false)} href="https://twitter.com/thelastpioneers" target="_blank"><FaXTwitter /></Link>
                    </p>
                    <div className="hidden md:flex gap-6 text-xl">
                        {mappedLinks}
                    </div>

                    <div className="flex justify-between w-full md:hidden">
                        <h1 className="uppercase text-white text-2xl">The Last Pioneers</h1>
                        <p className="text-white text-2xl" onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <FaX /> : <FaBars /> }
                        </p>
                    </div>
                </nav>
            </section>

            <section>
                {showMenu && (
                    <div className={`${isScrolled || showMenu ? "bg-opacity-50 backdrop-blur-lg" : "bg-transparent"} text-4xl h-screen w-full fixed top-24 py-10 z-[999] flex flex-col px-4 gap-16`}>
                        {mappedLinks}
                    </div>
                )}
            </section>

            <section className={`${showMenu && "hidden"} md:hidden fixed right-4 top-[50%] translate-y-[-50%] z-[999]`}>
                <div className=" bg-white text-black p-2 rounded bg-opacity-50 backdrop-blur-lg">
                    <Link href="https://facebook.com/thelastpioneers" target="_blank"><FaFacebook className="mb-4" /></Link>
                    <Link href="https://instagram.com/thelastpioneers" target="_blank"><FaInstagram className="mb-4" /></Link>
                    <Link href="https://tiktok.com/@thelastpioneers" target="_blank"><FaTiktok className="mb-4" /></Link>
                    <Link href="https://youtube.com/channel/UCP-4VYYObKUuz8rrDsw9pCg" target="_blank"><FaYoutube className="mb-4" /></Link>
                    <Link href="https://twitter.com/thelastpioneers" target="_blank"><FaXTwitter /></Link>
                </div>
            </section>
        </>
    )
}
