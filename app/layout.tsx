import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

const sleepyHollow = localFont({
  src: "./fonts/BNSleepyHollow-Clean.otf",
});


export const metadata: Metadata = {
  title: "The Last Pioneers",
  description: "Explore the unique sound of The Last Pioneers, an emerging band blending indie rock, folk, and modern influences. Discover their music, latest releases, and live performances that capture the spirit of innovation and artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sleepyHollow.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
