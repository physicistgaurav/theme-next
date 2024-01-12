/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
    ],
  },
};

module.exports = nextConfig;
