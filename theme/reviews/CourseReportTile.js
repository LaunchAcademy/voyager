import React from 'react'

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
        <p>Overall Experience: {overallScore}</p>
        <p>Curriculum: {curriculumScore}</p>
        <p>Instructors: {instructorScore}</p>
        <p>Job Assistance: {jobAssistanceScore}</p>
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