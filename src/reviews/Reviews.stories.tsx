import React from "react"

import { Meta, Story } from "@storybook/react"

import { CourseReportTile } from "./CourseReportTile"
import { ReviewList } from "./ReviewList"
import mdx from "./Reviews.mdx"
import { SwitchupReviewTile } from "./SwitchupReviewTile"
import { ReviewListProps, CourseReportTileProps, SwitchupReviewTileProps } from "./reviews.d"

const reviews = [
  {
    id: 1,
    reviewTitle: "Best Decision for a Real Future",
    reviewedAt: "11/20/2019",
    alumniName: "Susan Ma",
    alumniTitle: "Software Engineer",
    verified: "true",
    overallScore: "5",
    instructorScore: "5",
    curriculumScore: "5",
    jobAssistanceScore: "5",
    reviewUrl: "https://www.coursereport.com/schools/launch-academy?shared_review=22740#reviews",
    reviewParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    reviewTitle: "Best Decision for a Real Future",
    reviewedAt: "11/20/2019",
    alumniName: "Susan Ma",
    alumniTitle: "Software Engineer",
    alumniGradYear: "2019",
    verified: "true",
    overallScore: "5",
    curriculumScore: "5",
    jobAssistanceScore: "5",
    reviewUrl: "https://www.switchup.com/schools/launch-academy?shared_review=22740#reviews",
    reviewParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    reviewTitle: "Best Decision for a Real Future",
    reviewedAt: "11/20/2019",
    alumniName: "Susan Ma",
    alumniTitle: "Software Engineer",
    verified: "true",
    overallScore: "5",
    instructorScore: "5",
    curriculumScore: "5",
    jobAssistanceScore: "5",
    reviewUrl: "https://www.coursereport.com/schools/launch-academy?shared_review=22740#reviews",
    reviewParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    reviewTitle: "Best Decision for a Real Future",
    reviewedAt: "11/20/2019",
    alumniName: "Susan Ma",
    alumniTitle: "Software Engineer",
    verified: "true",
    overallScore: "5",
    instructorScore: "5",
    curriculumScore: "5",
    jobAssistanceScore: "5",
    reviewUrl: "https://www.coursereport.com/schools/launch-academy?shared_review=22740#reviews",
    reviewParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    reviewTitle: "Best Decision for a Real Future",
    reviewedAt: "11/20/2019",
    alumniName: "Susan Ma",
    alumniTitle: "Software Engineer",
    verified: "true",
    overallScore: "5",
    instructorScore: "5",
    curriculumScore: "5",
    jobAssistanceScore: "5",
    reviewUrl: "https://www.coursereport.com/schools/launch-academy?shared_review=22740#reviews",
    reviewParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,
    reviewTitle: "Best Decision for a Real Future",
    reviewedAt: "11/20/2019",
    alumniName: "Susan Ma",
    alumniTitle: "Software Engineer",
    alumniGradYear: "2019",
    verified: "true",
    overallScore: "5",
    curriculumScore: "5",
    jobAssistanceScore: "5",
    reviewUrl: "https://www.switchup.com/schools/launch-academy?shared_review=22740#reviews",
    reviewParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 7,
    reviewTitle: "Best Decision for a Real Future",
    reviewedAt: "11/20/2019",
    alumniName: "Susan Ma",
    alumniTitle: "Software Engineer",
    verified: "true",
    overallScore: "5",
    instructorScore: "5",
    curriculumScore: "5",
    jobAssistanceScore: "5",
    reviewUrl: "https://www.coursereport.com/schools/launch-academy?shared_review=22740#reviews",
    reviewParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 8,
    reviewTitle: "Best Decision for a Real Future",
    reviewedAt: "11/20/2019",
    alumniName: "Susan Ma",
    alumniTitle: "Software Engineer",
    verified: "true",
    overallScore: "5",
    instructorScore: "5",
    curriculumScore: "5",
    jobAssistanceScore: "5",
    reviewUrl: "https://www.coursereport.com/schools/launch-academy?shared_review=22740#reviews",
    reviewParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
]

const review = {
  key: 1,
  reviewTitle: "Best Decision for a Real Future",
  reviewedAt: "11/20/2019",
  alumniName: "Susan Ma",
  alumniTitle: "Software Engineer",
  verified: "true",
  overallScore: "5",
  instructorScore: "5",
  curriculumScore: "5",
  jobAssistanceScore: "5",
  reviewUrl: "https://www.coursereport.com/schools/launch-academy?shared_review=22740#reviews",
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

export default {
  title: "Reviews",
  component: CourseReportTile,
  parameters: {
    docs: { page: mdx },
  },
  argTypes: {
    id: { table: { disable: true } },
    reviewParagraph: { table: { disable: true } },
  },
} as Meta

const GridTemplate: Story<ReviewListProps> = (args) => (
  <section className="review-grid-container">
    <ReviewList {...args} />
  </section>
)

export const ReviewGrid = GridTemplate.bind({})
ReviewGrid.args = {
  allReviews: reviews,
}
Object.keys(review).forEach((key) => {
  ReviewGrid.argTypes = {
    ...ReviewGrid.argTypes,
    [key]: {
      table: { disable: true },
    },
  }
})

const CourseTileTemplate: Story<CourseReportTileProps> = (args) => <CourseReportTile {...args} />

export const CourseTile = CourseTileTemplate.bind({})
CourseTile.storyName = "Course Report Tile"
CourseTile.args = { ...review }

const SwitchupTileTemplate: Story<SwitchupReviewTileProps> = (args) => (
  <SwitchupReviewTile {...args} />
)

export const SwitchupTile = SwitchupTileTemplate.bind({})
SwitchupTile.args = { ...review }
