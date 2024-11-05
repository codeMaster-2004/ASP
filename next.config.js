/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ASP',  // GitHub Pages will serve the site under /ASP
  assetPrefix: './',  // Set to relative so paths adjust depending on the domain
  trailingSlash: true,  // Ensures URLs end with a slash for consistency
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
};

module.exports = nextConfig;

