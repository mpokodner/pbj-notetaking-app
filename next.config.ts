import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Ensure the app only runs on localhost:3000
  env: {
    HOSTNAME: "localhost",
    PORT: "3000",
  },
};

export default nextConfig;
