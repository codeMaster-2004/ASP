/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ASP',
  assetPrefix: '/ASP/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig