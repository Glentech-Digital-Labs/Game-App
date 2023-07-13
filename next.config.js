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

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ]
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
      destination: "https://3ef8-106-212-6-226.ngrok-free.app/api/v1/:path*",
    },
    {
      source: "/socket.io/:path*",
      destination: "https://3ef8-106-212-6-226.ngrok-free.app/socket.io/:path*",
    },
  ],
}

module.exports = nextConfig
