import React from "react"

import { Meta, Story } from "@storybook/react"

import { Quote } from "./Quote"
import { QuoteProps } from "./Quote.d"
import mdx from "./Quote.stories.mdx"
import "./css/quote.css"

export default {
  title: "Quotes",
  component: Quote,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

const defaultArgs = {
  quoteType: "hero",
  quote:
    "I highly recommend Launch Academy to anyone who is thinking about switching to software development. Launch Academy found a great formula for success.",
  name: "Mo Zhu",
  company: "3Play Media",
}

const Template: Story<QuoteProps> = (args) => <Quote {...defaultArgs} {...args} />

export const HeroQuote = Template.bind({})

export const BannerQuote = Template.bind({})
BannerQuote.args = { quoteType: "banner" }

export const StudentQuote = Template.bind({})
StudentQuote.args = {
  quoteType: "student",
  studentImageUrl: "https://placekitten.com/300/300",
}
