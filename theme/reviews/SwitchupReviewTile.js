import React from 'react'

import ReviewStars from "./ReviewStars.js"
import "./switchupreview.css"

const SwitchupReviewTile = ({ reviewTitle, reviewedAt, alumniName, overallScore, curriculumScore, jobAssistanceScore, reviewUrl, children }) => {
  return (
    <article className="switchup">
      <section className="switchup__reviewer">
        <div className="reviewer__name">
          <h4>{alumniName}</h4>
          <p>{reviewedAt}</p>
        </div>
          <p>18-Week On-Campus JavaScript Immersive Bootcamp</p>
          <p>Graduated: 2019</p>
      </section>
      <section className="switchup__scores">
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
      <section className="switchup__review">
        <h4 className="review__title">{reviewTitle}</h4>
          <p className="review__text">{children}</p>
        <a className="review__link" href={reviewUrl}><button className="review__link-button" >read more</button></a>
      </section>
    </article>
  )
}

export default SwitchupReviewTile