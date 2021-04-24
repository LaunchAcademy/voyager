import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import "../theme/typography/typography.css";
import colors from "../theme/colors/colors"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addParameters({
  backgrounds: {
    default: 'default',
    values: [
      {
        name: "default",
        value: colors.white.hex
      },
      {
        name: "callout",
        value: colors.secondaryBrand.hex
      },
      {
        name: "photo",
        value: colors.secondaryText.hex
      }

    ]
  },
});
