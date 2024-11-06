/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  output: 'export',
  assetPrefix: '',
  basePath: '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig;
