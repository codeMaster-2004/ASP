const nextConfig = {
  assetPrefix: '/ASP',
  basePath: '/ASP', 
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  trailingSlash: true,
}

module.exports = nextConfig
// const nextConfig = {
//   output: 'export',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/ASP' : '',
//   basePath: process.env.NODE_ENV === 'production' ? '/ASP' : '',
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true,
// }

// module.exports = nextConfig