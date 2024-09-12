/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/ASP/',
  basePath: '/ASP',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig