import React from 'react'

import CourseReportTile from "./CourseReportTile"
import SwitchupReviewTile from "./SwitchupReviewTile"
import "./reviewGrid.css"

const ReviewList = ({ allReviews }) => {

  const reviewsArray = allReviews.map((review)=> {
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
          key={review.id}
          reviewTitle={review.reviewTitle}
          reviewedAt={review.reviewedAt}
          alumniName={review.alumniName}
          alumniTitle={review.alumniTitle}
          alumniGradYear={review.alumniGradYear}
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
    <div className="review-grid review-grid_stagger">
      {reviewsArray}
    </div>
  )
}

export default ReviewList