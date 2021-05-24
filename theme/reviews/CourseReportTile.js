import React from 'react'
import ReviewStars from './ReviewStars'


import "./reviewTiles.css"

const CourseReportTile = ({ reviewTitle, reviewedAt, alumniName, alumniTitle, verified, overallScore, instructorScore, curriculumScore, jobAssistanceScore, reviewUrl, children }) => {

  let verifiedText
  if(verified) {
    verifiedText = "Verified"
  }

  return(
    <article className="review review__course-report">
      <section className="review_reviewer review_reviewer__course-report">
        <section className="reviewer_title">
          <h4>{reviewTitle}</h4>
          <p> - {reviewedAt}</p>
        </section>
        <ul className="reviewer_info">
          <li className="reviewer_info--headline">{alumniName}</li>
          <li>• {alumniTitle}</li>
          <li>• Graduate</li>
          <li>• Course: Immersive Full Stack Web Development Program</li>
          <li>• Campus: Boston</li>
          <li>• {verifiedText}</li>
        </ul>
      </section>
      <section className="review_scores review_scores__course-report">
        <div className="review_scores__item">
          <p>Overall Experience:</p>
          <ReviewStars rating={overallScore}/>
        </div>
        <div className="review_scores__item">
          <p>Curriculum:</p>
          <ReviewStars rating={curriculumScore}/>
        </div>
        <div className="review_scores__item">
          <p>Instructors: </p>
          <ReviewStars rating={instructorScore}/>
        </div>
        <div className="review_scores__item">
          <p>Job Assistance: </p>
          <ReviewStars rating={jobAssistanceScore}/>
        </div>
      </section>
      <section className="review_narrative review_narrative__course-report">
        <div className="review_text"><p>{children}</p>
          </div>
          <div className="review_readmore">
        </div>
        <a className="review_link" href={reviewUrl}><button className="review_link-button" >read more</button></a>
      </section>
    </article>
  )
}

export default CourseReportTile