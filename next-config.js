/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/ASP/',
  basePath: '/ASP',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig