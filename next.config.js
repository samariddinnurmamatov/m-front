/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ["uzum.uz"],
  },
};

module.exports = nextConfig;