/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ASP',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
}

module.exports = nextConfig
