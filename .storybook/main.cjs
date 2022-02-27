//webpackFinal fix courtesy of https://github.com/storybookjs/storybook/issues/12668
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-postcss", "@storybook/addon-links", "@storybook/addon-essentials"],
}
