import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
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
};

export default withBundleAnalyzer(nextConfig);
