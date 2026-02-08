import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**", // TMDB ရဲ့ ပုံအားလုံးကို ခွင့်ပြုတာပါ
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
