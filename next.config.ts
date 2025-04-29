/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Set basePath for subpath routing in production
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '',
    assetPrefix: '',
  } : {}),
  // Add image domains for external images
  images: {
    domains: ['localhost', 'disrvpt.co', 'disrvpt-web-canvas.vercel.app'],
    unoptimized: true,
  },
  // Fix cross-origin issues
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  // Output standalone for better compatibility
  output: 'standalone'
}

module.exports = nextConfig
