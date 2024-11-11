"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaTiktok, FaX, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const links = [
        { name: "Listen", to: "#listen" },
        { name: "About", to: "/" },
        { name: "Video", to: "/" },
        { name: "Gallery", to: "/" },
        { name: "Mailing List", to: "#mailing-list" },
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
        <Link href={link.to} key={link.name} className="uppercase text-white">{link.name}</Link>
    ))


    return (
        <>
            <section className="relative z-[998]">
                <nav className={`${isScrolled || showMenu ? "bg-opacity-50 backdrop-blur-lg" : "bg-transparent"}
                flex justify-between fixed top-0 z-[999] h-24 w-full items-center px-4 md:px-10`}>
                    <p className="hidden md:flex items-center gap-4 text-white text-xl">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTiktok />
                        <FaYoutube />
                        <FaXTwitter />
                    </p>
                    <div className="hidden md:flex gap-6 text-xl">
                        {mappedLinks}
                    </div>

                    <div className="flex justify-between w-full md:hidden">
                        <p className="uppercase text-white text-2xl">The Last Pioneers</p>
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

            <section className={`${showMenu && "hidden"} md:hidden fixed left-4 top-[50%] translate-y-[-50%] z-[999]`}>
                <div className="gap-4 space-y-4 bg-white text-black p-2 rounded bg-opacity-50 backdrop-blur-lg">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTiktok />
                    <FaYoutube />
                    <FaXTwitter />
                </div>
            </section>
        </>
    )
}