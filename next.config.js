/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' for Vercel compatibility and future API support
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

module.exports = nextConfig
