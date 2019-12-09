const path = require("path")

module.exports = {
  webpack: config => {
    ;(config.resolve.alias["src"] = path.join(__dirname, "src")),
      (config.resolve.alias["pages"] = path.join(__dirname, "pages"))

    return config
  }
}
