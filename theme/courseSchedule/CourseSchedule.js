import React from "react";

import Button from "../buttons/Button.js";
import "./courseschedule.css";

const CourseSchedule = ({
  cohort,
  enrollmentEnds,
  preflightBegins,
  ignitionBegins,
  cohortBegins,
  cohortEnds,
  buttonURL,
  buttonText,
}) => (
  <div className="course-schedule">
    <div className="course-schedule__course-content course-schedule__course-content_two-column">
      <label className="course-schedule__label">Cohort</label>
      <h3 className="course-schedule__cohort">{cohort}</h3>
    </div>
    <div className="course-schedule__course-content course-schedule__course-content_two-column">
      <label className="course-schedule__label">Enrollment ends</label>
      <h4 className="course-schedule__date">{enrollmentEnds}</h4>
    </div>
    <div className="course-schedule__course-content">
      <label className="course-schedule__label">Preflight begins</label>
      <h4 className="course-schedule__date">{preflightBegins}</h4>
    </div>
    <div className="course-schedule__course-content">
      <label className="course-schedule__label">Ignition begins</label>
      <h4 className="course-schedule__date">{ignitionBegins}</h4>
    </div>
    <div className="course-schedule__course-content">
      <label className="course-schedule__label">Cohort begins</label>
      <h4 className="course-schedule__date">{cohortBegins}</h4>
    </div>
    <div className="course-schedule__course-content">
      <label className="course-schedule__label">Cohort ends</label>
      <h4 className="course-schedule__date">{cohortEnds}</h4>
    </div>
    <div className="course-schedule__course-content course-schedule__course-content_two-column">
      <Button to={buttonURL} text={buttonText} className="hero__button" size="lg" />
    </div>
  </div>
);

export default CourseSchedule;
