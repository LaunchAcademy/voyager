import React from "react"

import { Meta, Story } from "@storybook/react"

import { CardList } from "./CardList"
import mdx from "./Cards.stories.mdx"
import "./css/cards.css"

const content = [
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  },
]

const projectContent = [
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    projectTitle: "Project Name",
    studentName: "Student Name",
    studentProfileUrl: "https://placekitten.com/408/287",
    mobile: true,
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    projectTitle: "Project Name",
    studentName: "Student Name",
    mobile: false,
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    projectTitle: "Project Name",
    studentName: "Student Name",
    studentProfileUrl: "https://placekitten.com/408/287",
    mobile: true,
  },
]

const blogContent = [
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    articleUrl: "#",
    articleTitle: "HTML article",
    articleTime: "20 minutes",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    articleUrl: "#",
    articleTitle: "HTML article",
    articleTime: "20 minutes",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    articleUrl: "#",
    articleTitle: "HTML article",
    articleTime: "20 minutes",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    articleUrl: "#",
    articleTitle: "HTML article",
    articleTime: "20 minutes",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    articleUrl: "#",
    articleTitle: "HTML article",
    articleTime: "20 minutes",
  },
  {
    Image: (): JSX.Element => <img src="https://placekitten.com/408/287" />,
    header: "Learn the right things, in the right order",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    articleUrl: "#",
    articleTitle: "HTML article",
    articleTime: "20 minutes",
  },
]

export default {
  title: "Cards",
  component: CardList,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

const defaultArgs = {
  content: content,
  numberOfColumns: 3,
  learnMoreToggle: false,
  cardType: "",
}

const Template: Story = ({ heading, ...args }) => (
  <section className="card-list-container">
    <h2>{heading}</h2>
    <CardList {...defaultArgs} {...args} />
  </section>
)

export const ProgramCards = Template.bind({})
ProgramCards.args = {
  heading: "Everything you need to get hire-ready in just 18 weeks.",
}

export const StudentProjectCards = Template.bind({})
StudentProjectCards.args = {
  heading: "Student Projects",
  content: projectContent,
}

export const BlogCards = Template.bind({})
BlogCards.args = {
  content: blogContent,
}
