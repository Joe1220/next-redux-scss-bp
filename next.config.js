const path = require("path")
const withSass = require("@zeit/next-sass")

module.exports = withSass({
  webpack: (config, options) => {
    config.resolve.alias["src"] = path.join(__dirname, "src")
    config.resolve.alias["pages"] = path.join(__dirname, "pages")

    return config
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, "src"), path.resolve(__dirname, "pages")]
  }
})
