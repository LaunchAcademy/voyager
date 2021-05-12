import React from 'react'
import CourseSchedule from "./CourseSchedule.js"


const CourseScheduleList = ({ dates }) => {
  const dateData = dates.map((date) => {
    return(
      <CourseSchedule 
        cohort="Boston #"
        enrollmentEnd={date.enrollmentEnds}
        preflightBegins={date.preflightBegins}
        ignitionBegins={date.ignitionBegins}
        cohortBegins={date.cohortBegins}
        cohortEnds={date.cohortEnds}
        buttonURL="#"
        buttonText="Apply Today"
     />
    )
  })

    return(
      <div className="course-schedule">
        {dateData}
      </div>
    )
}

export default CourseScheduleList