import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import "../theme/typography/typography.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    inlineStories: false
  },
});
