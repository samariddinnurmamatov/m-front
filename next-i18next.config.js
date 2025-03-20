const path = require("path");

/**
 * @type {import("next").NextConfig}
 */
module.exports = {
  i18n: {
    locales: ["ru", "uz", "kr"],
    defaultLocale: "ru",
    localePath: path.resolve("./public/locales"),
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  ns: ["common", "not-found", "internal-server-error"],
};
