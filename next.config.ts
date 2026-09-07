import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Modern formats first; applies to any raster art added under /public later.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
