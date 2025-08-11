import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // For GitHub Pages deployment
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure the app only runs on localhost:3000
  env: {
    HOSTNAME: "localhost",
    PORT: "3000",
  },
};

export default nextConfig;
