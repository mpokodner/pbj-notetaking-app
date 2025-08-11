import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [],
  // Remove static export configuration for Vercel deployment
  // output: "export",
  // trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove localhost restrictions for Vercel deployment
  // env: {
  //   HOSTNAME: "localhost",
  //   PORT: "3000",
  // },
  experimental: {
    // Enable better handling of platform-specific binaries
  },
  webpack: (config, { isServer }) => {
    // Handle platform-specific binaries
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
