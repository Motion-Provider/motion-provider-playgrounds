/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://motionprovider.dev",
  generateRobotsTxt: true,
  autoLastmod: true,
  outDir: "./out",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
