const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  footerText: `ArkGan ${new Date().getFullYear()} © Arkgan.`,
})

module.exports = withNextra()