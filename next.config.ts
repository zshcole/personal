import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = withMDX({
  extension: /\.mdx?$/, // Enable MDX for .mdx files
})({
  pageExtensions: ["ts", "tsx", "md", "mdx"], // Add MDX to page extensions
  /* other config options here */
});


export default nextConfig;
