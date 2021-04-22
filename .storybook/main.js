//webpackFinal fix courtesy of https://github.com/storybookjs/storybook/issues/12668
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../theme/**/*.stories.mdx",
  ],
  addons: ["@storybook/addon-postcss", "@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    /**
     * CSS handling, specifically overriding postcss loader
     */
    // Find the only Storybook webpack rule that tests for css
    const cssRule = config.module.rules.find((rule) => "test.css".match(rule.test));
    // Which loader in this rule mentions the custom Storybook postcss-loader?
    const loaderIndex = cssRule.use.findIndex((loader) => {
      // Loaders can be strings or objects
      const loaderString = typeof loader === "string" ? loader : loader.loader;
      return loaderString.includes("@storybook/core/node_modules/postcss-loader");
    });
    // Simple loader string form, removes the obsolete "options" key
    cssRule.use[loaderIndex] = "postcss-loader";

    // Uncomment the following to debug
    // console.dir(config, { depth: null })
    return config;
  },
};
