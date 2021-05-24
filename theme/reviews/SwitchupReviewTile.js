import React from 'react'

import ReviewStars from "./ReviewStars.js"
import "./reviewtiles.css"

const SwitchupReviewTile = ({ reviewTitle, reviewedAt, alumniName, alumniTitle, alumniGradYear, overallScore, curriculumScore, jobAssistanceScore, reviewUrl, children }) => {

  let alumniTitleCheck
  if(alumniTitle) {
    alumniTitleCheck=` | ${alumniTitle}`
  }

  return (
    <article className="review review_switchup">
      <section className="review_switchup__reviewer">
        <div className="reviewer__name">
          <h4>{alumniName}{alumniTitleCheck}</h4>
          <p>{reviewedAt}</p>
        </div>
          <p>18-Week On-Campus JavaScript Immersive Bootcamp</p>
          <p>Graduated: {alumniGradYear}</p>
      </section>
      <section className="review_switchup__scores">
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
      <section className="review_switchup__review">
        <h4 className="review__title">{reviewTitle}</h4>
          <p className="review__text">{children}</p>
        <a className="review__link" href={reviewUrl}>read more</a>
      </section>
    </article>
  )
}

export default SwitchupReviewTile