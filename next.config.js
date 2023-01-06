/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com", "localhost"],
  },
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true,
    },
  }
};


module.exports = nextConfig;
