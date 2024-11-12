import Image from "next/image";
import backgroundImg from "@/public/images/listen-section.png";
import albumImg from "@/public/images/album-img.png";
import { Button } from "./ui/button";
import { FaApple, FaSpotify } from "react-icons/fa6";

export default function ListenSection() {
    return (
        <section className="w-full relative h-screen">

            <div className="grid grid-cols-1 md:grid-cols-2 items-center h-screen px-6 md:px-10 py-20">
                <Image src={albumImg} alt="listen section"className="w-full object-cover" />

                <section className="space-y-6 text-white">
                    <h2 className="text-3xl">OUT NOW</h2>
                    <h2 className="text-8xl">DON'T TELL ME</h2>

                    <div className="flex items-center gap-4">
                        <Button className="flex items-center gap-2">
                            <FaApple /> <span>listen on apple music</span>
                        </Button>
                        <Button className="flex items-center gap-2">
                            <FaSpotify /> <span>listen on spotify</span>
                        </Button>
                    </div>
                </section>
            </div>
            <Image src={backgroundImg} alt="listen section"className="blur-sm fixed top-0 left-0 -z-10 w-full object-cover" />
        </section>
    )
}