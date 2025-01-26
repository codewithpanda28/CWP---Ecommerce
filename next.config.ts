import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.pexels.com",
      "img.freepik.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "platform-lookaside.fbsbx.com", // add this domain
    ],
  },
};

export default nextConfig;

