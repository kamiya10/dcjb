import createMDX from '@next/mdx';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.discordapp.com',
      },
    ],
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
