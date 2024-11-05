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
}

module.exports = nextConfig;
