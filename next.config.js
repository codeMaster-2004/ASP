// const nextConfig = {
//   assetPrefix: '/ASP',
//   basePath: '', 
//   images: {
//     unoptimized: true,
//     loader: 'custom',
//     loaderFile: './imageLoader.js',
//   },
// }
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{your-repo-name}' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/{your-repo-name}' : '',
  images: {
    unoptimized: true,
  }
}