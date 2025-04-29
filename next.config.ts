import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // For production deployment:
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/220ada',
    assetPrefix: '/220ada',
  } : {}),
  // Output standalone build for better compatibility
  output: 'standalone',
}

export default nextConfig
