import React, { FC } from "react"

import { Meta, Story } from "@storybook/react"

import { HorizontalProfile } from "./HorizontalProfile"
import mdx from "./HorizontalProfile.mdx"
import "./css/horizontalProfile.css"

const kittenHeadshot: FC = () => <img src="https://placekitten.com/300/300" />

export default {
  title: "Horizontal Profile",
  component: HorizontalProfile,
  parameters: {
    docs: { page: mdx },
  },
} as Meta

const Template: Story = () => (
  <div className="horizontal-profile-list__title">
    <h2>Learn to code the human way: Meet your team of full-time software engineers</h2>
    <div className="horizontal-profile-list__container">
      <HorizontalProfile
        name="Kylee Acker"
        Image={kittenHeadshot}
        currentTitle="Sr. Experience Engineer"
        formerTitle="Pastry Chef"
        description="Philly civic engager, swam in the Schuylkill River once."
      />
      <HorizontalProfile
        name="Brianna Kincart"
        Image={kittenHeadshot}
        currentTitle="Dev Extraordinaire"
        formerTitle="Financial Analyst"
        description="yogi, runner."
      />
      <HorizontalProfile
        name="Alex Schwartz"
        Image={kittenHeadshot}
        currentTitle="Career Services Manager"
        formerTitle="Teacher"
        description="lifelong learner. Fan of books, games, and tea."
      />
      <HorizontalProfile
        name="Random Cat"
        Image={kittenHeadshot}
        currentTitle="Deep Thoughts Thinker"
        formerTitle="Kitten"
        description="unsure how I even got here."
      />
    </div>
  </div>
)

export const Default = Template.bind({})
