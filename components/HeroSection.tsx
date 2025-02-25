import NextImage from "next/image";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

export default function HeroSection() {
  const IMAGE_SOURCE =
    "https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731534719/hero-jpg_xfneoq_p2gebk.avif";
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = IMAGE_SOURCE;
  }, [IMAGE_SOURCE]);
  return (
    <section id="home" className="relative">
      <div className={`${imageLoaded ? "hidden" : "inline"}`}>
        <Blurhash
          hash="L79P_^WX00WWenNGS4xa00oz~WM{"
          width={1920}
          height={1080}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <NextImage
        src={IMAGE_SOURCE}
        alt="hero"
        className={`${!imageLoaded ? "hidden" : "inline"} w-full h-screen object-cover`}
        priority
        width={1920}
        height={1080}
      />
      <div className="hidden md:block space-y-4 absolute left-6 bottom-10 md:bottom-10 md:left-10">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl">
          THE LAST
        </h1>
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl">
          PIONEERS
        </h1>
      </div>
    </section>
  );
}
