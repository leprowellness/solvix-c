/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'solvixcore.com' }],
        destination: 'https://www.solvixcore.com/:path*',
        permanent: true,
      },
      // Redirect old pricing page to contact
      {
        source: '/pricing',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
