# Voyager

Voyager is the home to components for Launch Academy, Inc.'s main static site. This was assembled using [Storybook](https://storybook.js.org/), and links to a [Gatsby](https://www.gatsbyjs.com/) static site.

## Set Up

clone repo `git clone`

run `yarn install`

run `yarn run storybook`

Storybook will launch in your browser.

## Using Voyager

- Rendered state of UI components will live in the `theme` folder as a `story`
  - [What's a story?](https://storybook.js.org/docs/react/get-started/whats-a-story)
- If you're adding a new component please search the theme folder for a story that's already created and add the new component to the according folder.
- If you don't find what you're looking for please create a new folder and add a `stories.mdx` file, styles, and the according `React` components.

## Styling and Naming Conventions

The CSS files should be camelCase

- `featureList.css`

Your stories file should follow the naming convention of the folder you created and capitalized

- `FeatureList.stories.mdx`

The styling in your CSS should follow [BEM (Block Element Modifier)](http://getbem.com/). Our specific set up is below:

`.block__element_modifier`

###### How to Use BEM in Voyager:

- You have a card block with a custom background named `danger`
- This card block has the elements image, header, and body
- The body has a custom text color named `fancy`

**Here is the CSS**

```
.card {
  & .card__image {}
  & .card__header {}
  & .card__body {}
  & .card__body_fancy {
    color: green;
  }
}
.card_danger {
  background-color: red;
}
```

**Here is the HTML**

```
<article className="card card_danger">
  <img className="card__image" />
  <h1 className="card__header">TEST</h1>
  <p className="card__body card__body_fancy">some info about this fancy paragraph.</p>
</article>
```
