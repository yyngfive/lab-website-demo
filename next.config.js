/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'daisyui.com',
            port: '',
            pathname: '/images/stock/**',
          },
        ],
      },
}

module.exports = nextConfig
