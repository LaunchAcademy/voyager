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

  viewport: {
    viewports: {
      sm: {
        name: 'sm',
        styles: {
          width: '375px',
          height: '480px'
        },
        type: "mobile"
      },
      md: {
        name: 'md',
        styles: {
          width: '768px',
          height: '640px'
        },
        type: "mobile"
      },
      lg: {
        name: 'lg',
        styles: {
          width: '1024px',
          height: '768px'
        },
        type: "desktop"
      },
      xl: {
        name: 'xl',
        styles: {
          width: '1280px',
          height: '1024px'
        },
        type: "desktop"
      },
      "2xl": {
        name: '2xl',
        styles: {
          width: '1536px',
          height: '1280px'
        },
        type: "desktop"
      }
    }
  }
});
