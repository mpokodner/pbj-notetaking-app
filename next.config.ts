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
};

export default nextConfig;
