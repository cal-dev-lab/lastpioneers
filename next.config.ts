import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'], // Allow images from Unsplash
    deviceSizes: [320, 420, 768, 1024, 1200], // Default device sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96], // Define custom image sizes
    formats: ['image/avif', 'image/webp'], // Enable modern formats like WebP and AVIF
  },
};

export default nextConfig;
