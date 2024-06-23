// @ts-check
"use strict";

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * Run `build` or `dev` with `NEXT_PUBLIC_SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// const dotenv = require("dotenv");
// dotenv.config()
await import("./src/env.mjs");
/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {import('webpack').Configuration} WebpackConfiguration
 * @typedef {import('webpack').Compiler} WebpackCompiler
 */
/** @type NextConfig */
const config = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    optimizePackageImports: [],
  },
  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  images: {
    remotePatterns: [
      {
        hostname: "ianrackson.com",
        protocol: "https",
      },
    ],
  },

  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },

  reactStrictMode: true,

  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/dashboard",
      //   permanent: true,
      // },
    ];
  },

  swcMinify: true,
  /**

   */

  /**
   * @type {NonNullable<NextConfig['webpack']>}
   * * @typedef {Object} WebpackCustomConfig
   * @property {string} devtool - The type of source map to generate.
   * @param {WebpackCustomConfig} config - The Webpack configuration.
   */
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    // Important: return the modified config
    // console.log(webpack);
    // config.mode = "production";
    // config.optimization.sideEffects = true;
    // config.optimization.usedExports = true;
    // config.optimization.removeAvailableModules = true;
    // // console.log({ config });
    // return config;
    if (dev) {
      config.devtool = "source-map";
    }
    return config;
  },
};
export default withBundleAnalyzer(config);
