/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
   serverActions: true
  },
  images: {
    domains: ["a0.muscache.com"],
  },
};

module.exports = nextConfig
