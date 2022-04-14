import React from "react"

import { Meta, Story } from "@storybook/react"

import { FaqListProps } from "./Faq.d"
import { FaqList } from "./FaqList"
import mdx from "./FaqList.stories.mdx"
import "./css/faqList.css"

const codedQuestions = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet?",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet?",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet?",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet?",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
  },
]

export default {
  title: "FAQs",
  component: FaqList,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

const defaultArgs = {
  questions: codedQuestions,
}

const Template: Story<FaqListProps> = (args) => (
  <div className="faq-list">
    <div className="faq-list-container">
      <FaqList {...defaultArgs} {...args} />
    </div>
  </div>
)

export const Faqs = Template.bind({})
Faqs.storyName = "FAQ List"
