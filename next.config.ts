import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mocom-api.vercel.app",
        pathname: "/static/accessories-photos/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
