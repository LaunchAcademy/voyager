import React, { FC } from "react"

import { CourseReportTile } from "./CourseReportTile"
import { CourseReportTileProps, SwitchupReviewTileProps } from "./ReviewTypes"
import { SwitchupReviewTile } from "./SwitchupReviewTile"

export const ReviewList: FC<{
  allReviews: (CourseReportTileProps | SwitchupReviewTileProps)[]
}> = ({ allReviews }) => {
  const reviewsArray = allReviews.map((review) => {
    if (review.reviewUrl.includes("coursereport.com")) {
      return (
        <CourseReportTile
          key={review.id}
          reviewTitle={review.reviewTitle}
          reviewedAt={review.reviewedAt}
          alumniName={review.alumniName}
          alumniTitle={review.alumniTitle}
          verified={review.verified}
          overallScore={review.overallScore}
          instructorScore={(review as CourseReportTileProps).instructorScore}
          curriculumScore={review.curriculumScore}
          jobAssistanceScore={review.jobAssistanceScore}
          reviewUrl={review.reviewUrl}
        >
          {review.reviewParagraph}
        </CourseReportTile>
      )
    }
    return (
      <SwitchupReviewTile
        key={review.id}
        reviewTitle={review.reviewTitle}
        reviewedAt={review.reviewedAt}
        alumniName={review.alumniName}
        alumniTitle={review.alumniTitle}
        alumniGradYear={(review as SwitchupReviewTileProps).alumniGradYear}
        verified={review.verified}
        overallScore={review.overallScore}
        curriculumScore={review.curriculumScore}
        jobAssistanceScore={review.jobAssistanceScore}
        reviewUrl={review.reviewUrl}
      >
        {review.reviewParagraph}
      </SwitchupReviewTile>
    )
  })

  return <div className="review-grid review-grid_stagger">{reviewsArray}</div>
}
