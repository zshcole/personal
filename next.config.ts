import type { NextConfig } from "next";
import withMDX from "@next/mdx";


const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  experimental: {
    mdxRs: true,
  },
}

const createMDX = withMDX({})

export default createMDX(nextConfig);
