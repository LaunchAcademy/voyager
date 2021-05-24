import React from 'react'

import ReviewStars from "./ReviewStars.js"
import "./reviewTiles.css"

const SwitchupReviewTile = ({ reviewTitle, reviewedAt, alumniName, alumniTitle, alumniGradYear, overallScore, curriculumScore, jobAssistanceScore, reviewUrl, children }) => {

  let alumniTitleCheck
  if(alumniTitle) {
    alumniTitleCheck=` | ${alumniTitle}`
  }

  return (
    <article className="review review__switchup">
      <section className="review_reviewer__switchup">
        <div className="reviewer_name">
          <h4>{alumniName}{alumniTitleCheck}</h4>
          <p>{reviewedAt}</p>
        </div>
          <p>18-Week On-Campus JavaScript Immersive Bootcamp</p>
          <p>Graduated: {alumniGradYear}</p>
      </section>
      <section className="review_scores__switchup">
        <div>
          <p>Overall Score</p>
          <ReviewStars rating={overallScore}/>
        </div>
        <div>
          <p>Curriculum</p>
          <ReviewStars rating={curriculumScore}/>
        </div>
        <div>
          <p>Job Support </p>
          <ReviewStars rating={jobAssistanceScore}/>
        </div>
      </section>
      <section className="review_narrative__switchup">
        <h4 className="review__title">{reviewTitle}</h4>
          <p className="review__text">{children}</p>
        <a className="review__link" href={reviewUrl}>read more</a>
      </section>
    </article>
  )
}

export default SwitchupReviewTile