import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import { PiMouseScrollThin } from "react-icons/pi";

import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Button } from "./ui/button";

const cld = new Cloudinary({ cloud: { cloudName: "djzt8qfjt" } });
const cldVid = cld
  .video("saveinsta.cc_1080p-coming-for-you-official-music-video_aaq1j3")
  .format("mp4") // Forces MP4 format
  .quality("auto"); // Optimizes quality

export default function HeroSection() {
  const videoContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the parent container
  const videoRef = useRef<HTMLVideoElement | null>(null); // Ref for the actual <video> element

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Directly toggle muted
    }
  };

  useEffect(() => {
    if (videoContainerRef.current) {
      videoRef.current = videoContainerRef.current.querySelector("video");

      if (videoRef.current) {
        videoRef.current.muted = false; // Try to start unmuted
        videoRef.current.volume = 1; // Ensure volume is at max
        videoRef.current.play().catch(() => {
          // If autoplay with sound is blocked, fallback to muted
          videoRef.current!.muted = true;
        });
      }
    }
  }, []);

  // const IMAGE_SOURCE =
  //   "https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731534719/hero-jpg_xfneoq_p2gebk.avif";
  // const [imageLoaded, setImageLoaded] = useState(false);
  // const [dimensions, setDimensions] = useState({
  //   width: typeof window !== "undefined" ? window.innerWidth : 1920,
  //   height: typeof window !== "undefined" ? window.innerHeight : 1080,
  // });

  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = () => {
  //     setImageLoaded(true);
  //   };
  //   img.src = IMAGE_SOURCE;
  // }, [IMAGE_SOURCE]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimensions({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Set initial dimensions

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <section id="home" className="-mt-20 md:-mt-32 relative h-screen">
      {/* <div className={`${imageLoaded ? "hidden" : "inline"}`}>
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
      /> */}
      <div
        ref={videoContainerRef}
        className="absolute top-0 left-0 w-full h-full"
      >
        <AdvancedVideo
          className="w-full h-full object-cover"
          cldVid={cldVid}
          autoPlay
          loop
          playsInline
          ref={(el) => {
            if (el) videoRef.current = el.video; // Attach actual <video> element
          }}
        />
      </div>
      <div className="text-white text-3xl flex flex-col gap-2 items-center absolute bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2">
        <PiMouseScrollThin className="animate-bounce" />
        <p className="text-lg">SCROLL</p>
        <Button onClick={toggleMute}>TOGGLE SOUND</Button>
      </div>
    </section>
  );
}
