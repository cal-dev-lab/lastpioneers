import Image from "next/image";
import HeroImg from "../public/images/hero.png"

export default function HeroSection() {
    return (
        <section id="home" className="relative">
            <Image src="https://images.unsplash.com/photo-1730669185590-2ed0736948d9?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" className="w-full h-screen object-cover" priority width={1920} height={1080} />
            <div className="hidden md:block space-y-4 absolute left-6 bottom-10 md:bottom-10 md:left-10">
                <p className="text-white text-4xl md:text-6xl lg:text-8xl">THE LAST</p>
                <p className="text-white text-4xl md:text-6xl lg:text-8xl">PIONEERS</p>
            </div>
        </section>
    )
}