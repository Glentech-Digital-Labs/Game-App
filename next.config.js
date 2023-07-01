/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "1000logos.net",
      "encrypted-tbn0.gstatic.com",
      "media.hovercode.com",
    ],
  },
}

module.exports = nextConfig
