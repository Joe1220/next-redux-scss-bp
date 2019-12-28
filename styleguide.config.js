module.exports = {
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: Object.assign({}, require("./docs/webpack.style.config.js"), {}),
  ignore: ["**/*.test.{ts, tsx, js}", "**/*.spec.{ts, tsx, js}"],
  styleguideDir: "docs.build",
  sections: [
    {
      name: "Documentation",
      content: "./README.md",
      sections: [
        ,
        {
          name: "Atoms",
          components: "src/components/atoms/**/*.tsx"
        },
        {
          name: "Molecules",
          components: "src/components/molecules/**/*.tsx"
        },
        {
          name: "Organisms",
          components: "src/components/organisms/**/*.tsx"
        },
        {
          name: "Templates",
          components: "src/components/templates/**/*.tsx"
        }
      ]
    }
  ]
}
