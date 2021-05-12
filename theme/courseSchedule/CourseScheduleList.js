import React, { Fragment } from 'react'
import { format } from 'date-fns'

import CourseSchedule from "./CourseSchedule.js"

const CourseScheduleList = ({ cohortSchedule }) => {
  let enrollmentEnds
  let preflightBegins
  let ignitionBegins
  let cohortBegins
  let cohortEnds

  const cohortScheduleData = cohortSchedule.map((date) => {
    enrollmentEnds = format(new Date(date.enrollmentEnds), 'MMM dd, yyyy')
    preflightBegins = format(new Date(date.preflightBegins), 'MMM dd, yyyy') 
    ignitionBegins = format(new Date(date.ignitionBegins), 'MMM dd, yyyy')
    cohortBegins = format(new Date(date.cohortBegins), 'MMM dd, yyyy')
    cohortEnds = format(new Date(date.cohortEnds), 'MMM dd, yyyy')

    return (
      <CourseSchedule 
        cohort={date.cohort}
        enrollmentEnds={enrollmentEnds}
        preflightBegins={preflightBegins}
        ignitionBegins={ignitionBegins}
        cohortBegins={cohortBegins}
        cohortEnds={cohortEnds}
        buttonURL={date.buttonURL}
        buttonText={date.buttonText}
     />
    )
  })

  return(
    <Fragment>
      {cohortScheduleData}
    </Fragment>
  )
}

export default CourseScheduleList