import React from 'react'
import Button from "../buttons/Button.js"

const CourseSchedule = ({ cohort, enrollmentEnd, preflightBegins, ignitionBegins, cohortBegins, cohortEnds, buttonURL, buttonText }) => {

  return (
    <div className="course-schedule">
      <div className="course-schedule__course_content course-schedule__course_content--two-column">
        <label className="course-schedule__label">Cohort</label>
        <h3 className="course-schedule__cohort-small-text">{cohort}</h3>
      </div>
      <div className="course-schedule__course_content course-schedule__course_content--two-column">
        <label className="course-schedule__label">Enrollment ends</label>
        <h4 className="course-schedule__date">{enrollmentEnd}</h4>
      </div>
      <div className="course-schedule__course_content">
        <label className="course-schedule__label">Preflight begins</label>
        <h4 className="course-schedule__date">{preflightBegins}</h4>
      </div>
      <div className="course-schedule__course_content"> 
        <label className="course-schedule__label">Ignition begins</label>
        <h4 className="course-schedule__date">{ignitionBegins}</h4>
      </div>
      <div className="course-schedule__course_content">
        <label className="course-schedule__label">Cohort begins</label>
        <h4 className="course-schedule__date">{cohortBegins}</h4>
      </div>
      <div className="course-schedule__course_content">
        <label className="course-schedule__label">Cohort ends</label>
        <h4 className="course-schedule__date">{cohortEnds}</h4>
      </div>
      <div className="course-schedule__course_content course-schedule__course_content--two-column">
        <Button to={buttonURL} text={buttonText} className="hero__button" size="lg" />
      </div>
    </div>
  )


}

export default CourseSchedule