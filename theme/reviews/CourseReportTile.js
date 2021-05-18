import React from 'react'
import ReviewStars from './ReviewStars'


import "./coursereport.css"

const CourseReportTile = ({ reviewTitle, reviewedAt, alumniName, alumniTitle, verified, overallScore, instructorScore, curriculumScore, jobAssistanceScore, reviewUrl, children }) => {

  return(
    <article className="course-report">
      <section className="course-report__title">
        <h4>{reviewTitle}</h4>
        <p> - {reviewedAt}</p>
      </section>
      <section className="course-report__reviewer">
        <ul className="reviewer__info">
          <li className="reviewer__info--headline">{alumniName}</li>
          <li> • {alumniTitle}</li>
          <li> • Graduate</li>
          <li> • Course: Immersive Full Stack Web Development Program</li>
          <li> • Campus: Boston</li>
          <li> • {verified}</li>
        </ul>
      </section>
      <section className="course-report__scores">
        <div className="scores__item">
          <p>Overall Experience:</p>
          <ReviewStars rating={overallScore}/>
        </div>
        <div className="scores__item">
          <p>Curriculum:</p>
          <ReviewStars rating={curriculumScore}/>
        </div>
        <div className="scores__item">
          <p>Instructors: </p>
          <ReviewStars rating={instructorScore}/>
        </div>
        <div className="scores__item">
          <p>Job Assistance: </p>
          <ReviewStars rating={jobAssistanceScore}/>
        </div>
      </section>
      <section className="course-report__review">
        <div className="review__text"><p>{children}</p>
          </div>
          <div className="review__readmore">
        </div>
        <a className="review__link" href={reviewUrl}><button className="review__link-button" >read more</button></a>
      </section>
    </article>
  )
}

export default CourseReportTile