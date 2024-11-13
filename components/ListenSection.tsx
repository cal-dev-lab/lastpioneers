import Image from "next/image";
import backgroundImg from "@/public/images/listen-section.png";
import albumImg from "@/public/images/album-img.png";
import { Button } from "./ui/button";
import { FaApple, FaSpotify } from "react-icons/fa6";
import Link from "next/link";

export default function ListenSection() {
    return (
        <section id="listen" className="w-full relative h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center h-screen px-6 md:px-10 py-20">
                <Image src="https://res.cloudinary.com/djzt8qfjt/image/upload/v1731467173/album-img_ywt7rq.png" alt="listen section"className="w-full object-cover" width={1920} height={1080} priority />

                <section className="space-y-6 text-white">
                    <h2 className="text-3xl">OUT NOW</h2>
                    <h2 className="text-6xl lg:text-8xl lg:flex">DON'T TELL ME</h2>

                    <div className="sm:flex items-center gap-4 space-y-2 md:space-y-0">
                        <Link href="https://music.apple.com/gb/album/dont-tell-me/1777484008?i=1777484009" target="_blank">
                            <Button className="w-full sm:w-auto flex items-center gap-2">
                                <FaApple /> <span>listen on apple music</span>
                            </Button>
                        </Link>
                        <Link href="https://open.spotify.com/track/6TunuvxaOLqSkAzHsZX4eZ?si=XpA8W8yWS66L4BwbwkmTkg" target="_blank">
                            <Button className="w-full sm:w-auto flex items-center gap-2">
                                <FaSpotify /> <span>listen on spotify</span>
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
            <Image src="https://res.cloudinary.com/djzt8qfjt/image/upload/v1731467375/listen-section_cyxll3.jpg" width={1080} height={1920} alt="listen section"className="blur-sm fixed top-0 left-0 -z-10 w-full h-screen object-cover" />
        </section>
    )
}