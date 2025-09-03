import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/assets/videos/:all*(mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age:31536000, immutable",
          },
        ],
      },
    ];
  },
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

export default nextConfig;
