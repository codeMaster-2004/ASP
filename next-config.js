/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // This will ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig