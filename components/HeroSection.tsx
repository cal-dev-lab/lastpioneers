import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="home" className="relative">
            <Image src="https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731534719/hero-jpg_xfneoq_p2gebk.avif" alt="hero" className="w-full h-screen object-cover" priority width={1920} height={1080} />
            <div className="hidden md:block space-y-4 absolute left-6 bottom-10 md:bottom-10 md:left-10">
                <h1 className="text-white text-4xl md:text-6xl lg:text-8xl">THE LAST</h1>
                <h1 className="text-white text-4xl md:text-6xl lg:text-8xl">PIONEERS</h1>
            </div>
        </section>
    )
}