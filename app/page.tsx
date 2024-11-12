"use client"
import { useEffect, useState } from "react";
import SubscribeForm from "./SubscribeForm";
import LoadingScreen from "./LoadingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ListenSection from "@/components/ListenSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[]);

  if (isLoading)
    return <LoadingScreen />;

  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ListenSection />
      {/* <GallerySection /> revisit */}
      <div className="bg-white h-screen w-full"></div>
      <SubscribeForm />
    </>
  );
}
