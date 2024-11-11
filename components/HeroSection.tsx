import Image from "next/image";
import HeroImg from "../public/images/hero.png"

export default function HeroSection() {
    return (
        <section id="home" className="relative">
            <Image src={HeroImg} alt="hero" className="w-full h-screen object-cover" />
            <div className="hidden md:flex absolute left-6 bottom-10 md:bottom-10 md:left-10">
                <p className="text-white text-4xl md:text-6xl lg:text-8xl">THE LAST PIONEERS</p>
            </div>
        </section>
    )
}