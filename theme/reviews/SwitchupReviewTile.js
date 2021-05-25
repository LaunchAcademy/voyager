import React from 'react'

import ReviewStars from "./ReviewStars.js"
import "./reviewTiles.css"

const SwitchupReviewTile = ({ reviewTitle, reviewedAt, alumniName, alumniTitle, alumniGradYear, overallScore, curriculumScore, jobAssistanceScore, reviewUrl, children }) => {

  let alumniTitleCheck
  if(alumniTitle) {
    alumniTitleCheck=` | ${alumniTitle}`
  }

  return (
    <article className="review review_switchup">
      <section className="review__reviewer review__reviewer_switchup">
        <div className="reviewer__name">
          <h4>{alumniName}{alumniTitleCheck}</h4>
          <p>{reviewedAt}</p>
        </div>
          <p>18-Week On-Campus JavaScript Immersive Bootcamp</p>
          <p>Graduated: {alumniGradYear}</p>
      </section>
      <section className="review__scores review__scores_switchup">
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
      <section className="review__narrative review__narrative_switchup">
        <h4 className="narrative__title">{reviewTitle}</h4>
          <p className="narrative__text">{children}</p>
        <a className="narrative__link" href={reviewUrl}>read more</a>
      </section>
    </article>
  )
}

export default SwitchupReviewTile