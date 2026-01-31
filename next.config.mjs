// next.config.mjs
import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  experimental: {
    optimizePackageImports: ['@once-ui/components', 'react-icons'],
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Sass options to suppress deprecation warnings
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default withMDX(nextConfig);
