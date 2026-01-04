/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/regops', // Matches repository name
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
