/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for Vercel compatibility
  trailingSlash: true,
  images: {
    unoptimized: true
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