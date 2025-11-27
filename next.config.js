/** @type {import('next').NextConfig} */
const isProd = process.env.BUILD_ENV === 'production' // usamos otra variable personalizada

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/dSign/' : '',
  basePath: isProd ? '/dSign' : '',
}

module.exports = nextConfig
