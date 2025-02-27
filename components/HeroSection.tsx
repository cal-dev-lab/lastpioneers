import NextImage from "next/image";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import { PiMouseScrollThin } from "react-icons/pi";

export default function HeroSection() {
  const IMAGE_SOURCE =
    "https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731534719/hero-jpg_xfneoq_p2gebk.avif";
  const [imageLoaded, setImageLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = IMAGE_SOURCE;
  }, [IMAGE_SOURCE]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial dimensions

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section id="home" className="-mt-20 md:-mt-32 relative">
      <div className={`${imageLoaded ? "hidden" : "inline"}`}>
        <Blurhash
          hash="L79P_^WX00WWenNGS4xa00oz~WM{"
          width={dimensions.width}
          height={dimensions.height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <NextImage
        src={IMAGE_SOURCE}
        alt="Press shot of The Last Pioneers"
        className={`${!imageLoaded ? "hidden" : "inline"} w-full h-screen object-cover`}
        priority
        width={dimensions.width}
        height={dimensions.height}
      />
      <div className="text-white text-3xl flex flex-col gap-2 items-center absolute bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2">
        <PiMouseScrollThin className="animate-bounce" />
        <p className="text-lg">SCROLL</p>
      </div>
    </section>
  );
}
