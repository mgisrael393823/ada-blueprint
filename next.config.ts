/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Remove basePath for direct access, we'll handle the routing through rewrites
  basePath: '',
  // Set environment variables for client-side access
  env: {
    NEXT_PUBLIC_BASE_PATH: ''
  },
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
