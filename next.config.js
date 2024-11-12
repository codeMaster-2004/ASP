const isGithubActions = process.env.GITHUB_ACTIONS || false
const isProduction = process.env.NODE_ENV === 'production'

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}`
  basePath = `/${repo}`
} else if (isProduction) {
  assetPrefix = '/ASP'
  basePath = '/ASP'
}

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add rewrites for local development
  async rewrites() {
    return [
      {
        source: '/ASP/:path*',
        destination: '/:path*',
      },
    ]
  },
}

module.exports = nextConfig