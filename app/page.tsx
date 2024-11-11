"use client"
import { useEffect, useState } from "react";
import SubscribeForm from "./SubscribeForm";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "./LoadingScreen";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  },[]);

  if (isLoading)
    return <LoadingScreen />;

  return (
    <>
      <Navigation />
      <HeroSection />
      <SubscribeForm />
      {/* <div className="bg-white h-screen w-full"></div> */}
    </>
  );
}
