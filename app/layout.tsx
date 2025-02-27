import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "@/components/ui/toaster";

const sleepyHollow = localFont({
  src: "./fonts/BNSleepyHollow-Clean.otf",
  variable: "--font-sleepy-hollow",
});

const neueMontreal = localFont({
  src: "./fonts/neue-montreal.otf",
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  title: "The Last Pioneers",
  description:
    "Explore the unique sound of The Last Pioneers, an emerging band blending indie rock, folk, and modern influences. Discover their music, latest releases, and live performances that capture the spirit of innovation and artistry.",
  icons: null,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sleepyHollow.variable} ${neueMontreal.variable} antialiased`}
      >
        <div className="hidden md:flex">
          <AnimatedCursor
            innerSize={10}
            outerSize={30}
            color="150, 150, 150"
            outerAlpha={0.2}
            innerScale={0.75}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="button"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
