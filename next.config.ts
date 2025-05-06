import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  //Compiler for quick loading. [Enable during production lol.]
  experimental: {
    mdxRs: false,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig);