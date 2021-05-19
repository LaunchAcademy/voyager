import React from 'react'

import CourseReportTile from "./CourseReportTile"
import SwitchupReviewTile from "./SwitchupReviewTile"

const ReviewList = ({ allReviews }) => {

  const reviewsArray = allReviews.map((review)=> {
    if (review.reviewUrl.includes("coursereport.com")) {
      return (
        <CourseReportTile 
          reviewTitle={review.reviewTitle}
          reviewedAt={review.reviewedAt}
          alumniName={review.alumniName}
          alumniTitle={review.alumniTitle}
          verified={review.verified}
          overallScore={review.overallScore}
          instructorScore={review.instructorScore}
          curriculumScore={review.curriculumScore}
          jobAssistanceScore={review.jobAssistanceScore}
          reviewUrl={review.reviewUrl}>
          {review.reviewParagraph}
        </CourseReportTile>
      )
    } else {
      return(
        <SwitchupReviewTile 
          reviewTitle={review.reviewTitle}
          reviewedAt={review.reviewedAt}
          alumniName={review.alumniName}
          alumniTitle={review.alumniTitle}
          verified={review.verified}
          overallScore={review.overallScore}
          curriculumScore={review.curriculumScore}
          jobAssistanceScore={review.jobAssistanceScore}
          reviewUrl={review.reviewUrl}>
          {review.reviewParagraph}
        </SwitchupReviewTile>
      )
    }
  })

  return (
    <div className="review-grid">
      <div className="review-grid__scroll"> {reviewsArray}
      </div>
    </div>
  )
}

export default ReviewList