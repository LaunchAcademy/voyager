import { addParameters } from "@storybook/react"
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks"
import colors from "../src/colors/colors"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addParameters({
  backgrounds: {
    default: "default",
    values: [
      {
        name: "default",
        value: colors.white.hex,
      },
      {
        name: "callout",
        value: colors.secondaryBrand.hex,
      },
      {
        name: "photo",
        value: colors.secondaryText.hex,
      },
    ],
  },

  viewport: {
    viewports: {
      sm: {
        name: "sm",
        styles: {
          width: "376px",
          height: "480px",
        },
        type: "mobile",
      },
      md: {
        name: "md",
        styles: {
          width: "769px",
          height: "640px",
        },
        type: "mobile",
      },
      lg: {
        name: "lg",
        styles: {
          width: "1025px",
          height: "768px",
        },
        type: "desktop",
      },
      xl: {
        name: "xl",
        styles: {
          width: "1281px",
          height: "1024px",
        },
        type: "desktop",
      },
      "2xl": {
        name: "2xl",
        styles: {
          width: "1537px",
          height: "1280px",
        },
        type: "desktop",
      },
    },
  },
})
