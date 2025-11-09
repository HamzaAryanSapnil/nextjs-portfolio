import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  }
};

export default nextConfig;
