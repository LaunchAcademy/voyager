import React from "react"

import { Meta, Story } from "@storybook/react"

import { Profile } from "./Profile"
import { ProfileProps } from "./Profile.d"
import mdx from "./Profile.mdx"
import "./css/profile.css"

const kittenHeadshot = (): JSX.Element => <img src="https://placekitten.com/300/300" />
const socialUrls = ["https://www.facebook.com", "https://github.com", "https://youtube.com"]

export default {
  title: "Profile",
  component: Profile,
  parameters: {
    docs: { page: mdx },
  },
} as Meta

const defaultArgs = {
  name: "Thom Froes",
  Image: kittenHeadshot,
  currentTitle: "DevOps",
  currentEmployer: "Boston Mutual",
  formerTitle: "Pastry Chef",
}

const Template: Story<ProfileProps> = (args) => (
  <div className="profile-list">
    <Profile {...defaultArgs} {...args} />
    <Profile {...defaultArgs} {...args} />
    <Profile {...defaultArgs} {...args} />
  </div>
)

export const FeaturedStudent = Template.bind({})

export const EmployeeProfiles = Template.bind({})
EmployeeProfiles.storyName = "Meet the Team Social"
EmployeeProfiles.args = {
  name: "Corinne Babel",
  currentTitle: "VP of Career Services",
  foundingMember: true,
  socialUrls,
}

{
  /* <div className="profile-list">
<Profile
  name="Corinne Babel"
  headshotUrl="https://placekitten.com/300/300"
  currentTitle="VP of Career Services"
  foundingMember="true"
  socialUrls={socialUrls}
/>
<Profile
  name="Kerrin Gillis"
  headshotUrl="https://placekitten.com/300/300"
  currentTitle="Experience Engineer"
  socialUrls={socialUrls}
/>
<Profile
  name="Nicholas Alberts"
  headshotUrl="https://placekitten.com/300/300"
  currentTitle="Boston Experience Manager"
  socialUrls={socialUrls}
/>
</div> */
}
