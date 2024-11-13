"use client"
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ListenSection from "@/components/ListenSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import MailingListSection from "@/components/MailingListSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

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
      <ListenSection />
      <AboutSection />
      <VideoSection />
      <GallerySection />
      <MailingListSection />
      <Footer />
    </>
  );
}
