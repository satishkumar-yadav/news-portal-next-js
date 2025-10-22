import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     domains: ['variety.com'],                             // to allow external image url
     remotePatterns: [
      {
          protocol: 'https',
          hostname: '**',                  // allow all https images
      },
     ],
  },
};

export default nextConfig;
