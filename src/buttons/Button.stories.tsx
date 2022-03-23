import React from "react"

import { Story } from "@storybook/react"

import Button from "./Button"
import { ButtonPlacement, ButtonProps, ButtonSize } from "./Button.d"
import "../../css/assets/main.css"
import "./css/buttons.css"
import mdx from "./Button.stories.mdx"

const defaultArgs = {
  text: "Apply Today",
  to: "#",
  size: "md" as ButtonSize,
  placement: null as ButtonPlacement,
}
const Template: Story<ButtonProps> = (args) => <Button {...defaultArgs} {...args} />

Template.parameters = {
  backgrounds: { default: "callout" },
}

export const _Default = Template.bind({})
_Default.args = {}

export const SmButton = Template.bind({})
SmButton.args = {
  size: "sm",
}

export const MdButton = Template.bind({})
MdButton.args = {
  size: "md",
}

export const LgButton = Template.bind({})
LgButton.args = {
  size: "lg",
}

export default {
  title: "Buttons",
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
}
