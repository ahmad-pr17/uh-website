import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Union Town virtual tour (krpano) is hosted on uniondevelopers.com, which blocks
  // cross-origin framing. Proxying it under our own origin lets us embed it in an <iframe>.
  async rewrites() {
    return [
      {
        source: "/vtour/:path*",
        destination: "https://www.uniondevelopers.com/vtour/:path*",
      },
    ];
  },
};

export default nextConfig;
