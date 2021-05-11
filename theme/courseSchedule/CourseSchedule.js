import React from 'react'

const CourseSchedule = ({ cohort, enrollmentEnd, preflightBegins, ignitionBegins, cohortBegins, cohortEnds }) => {

  return (
    <div>
      <div>
        <label>Cohort</label>
        <h3>{cohort}</h3>
      </div>
      <div>
        <label>Enrollment ends</label>
        <h4>{enrollmentEnd}</h4>
      </div>
      <div>
        <label>Preflight begins</label>
        <h4>{preflightBegins}</h4>
      </div>
      <div>
        <label>Ignition begins</label>
        <h4>{ignitionBegins}</h4>
      </div>
      <div>
        <label>Cohort begins</label>
        <h4>{cohortBegins}</h4>
      </div>
      <div>
        <label>Cohort ends</label>
        <h4>{cohortEnds}</h4>
      </div>
    </div>
  )


}

export default CourseSchedule