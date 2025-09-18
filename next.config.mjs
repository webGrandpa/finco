// next.config.mjs
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["joey.on.ge", "cdn.on.ge", "on.ge", "via.placeholder.com", "rachel.on.ge"],
    remotePatterns: [
      { protocol: "https", hostname: "**.on.ge" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

};

export default nextConfig;