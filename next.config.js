/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require("http-proxy-middleware")

const nextConfig = {
  images: {
    domains: [
      "1000logos.net",
      "encrypted-tbn0.gstatic.com",
      "media.hovercode.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push("_http_common")
    }
    return config
  },
  rewrites: () => [
    {
      source: "/api/v1/:path*",
      destination: "https://d28d-110-227-90-127.ngrok-free.app/api/v1/:path*",
    },
    {
      source: "/socket.io/:path*",
      destination:
        "https://d28d-110-227-90-127.ngrok-free.app/socket.io/:path*",
    },
  ],
}

module.exports = nextConfig
