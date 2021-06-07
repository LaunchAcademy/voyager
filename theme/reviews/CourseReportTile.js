import React from "react";
import ReviewStars from "./ReviewStars.js";

import "./reviewTiles.css";

const CourseReportTile = ({
  reviewTitle,
  reviewedAt,
  alumniName,
  alumniTitle,
  verified,
  overallScore,
  instructorScore,
  curriculumScore,
  jobAssistanceScore,
  reviewUrl,
  children,
}) => {
  let verifiedText;
  if (verified) {
    verifiedText = "Verified";
  }

  return (
    <article className="review review_course-report">
      <section className="review__reviewer review__reviewer_course-report">
        <section className="reviewer__title">
          <h4>{reviewTitle}</h4>
          <p> - {reviewedAt}</p>
        </section>
        <ul className="reviewer__info reviewer__info_divide">
          <li className="reviewer__info_headline">{alumniName}</li>
          <li>{alumniTitle}</li>
          <li>Graduate</li>
          <li>Course: Immersive Full Stack Web Development Program</li>
          <li>Campus: Boston</li>
          <li>{verifiedText}</li>
        </ul>
      </section>
      <section className="review__scores review__scores_course-report">
        <div className="scores__item">
          <p>Overall Experience:</p>
          <ReviewStars rating={overallScore} />
        </div>
        <div className="scores__item">
          <p>Curriculum:</p>
          <ReviewStars rating={curriculumScore} />
        </div>
        <div className="scores__item">
          <p>Instructors: </p>
          <ReviewStars rating={instructorScore} />
        </div>
        <div className="scores__item">
          <p>Job Assistance: </p>
          <ReviewStars rating={jobAssistanceScore} />
        </div>
      </section>
      <section className="review__narrative review__narrative_course-report">
        <div className="narrative__text">
          <p>{children}</p>
        </div>
        <div className="narrative__read-more" />
        <a className="narrative__link" href={reviewUrl}>
          <button className="link__button">read more</button>
        </a>
      </section>
    </article>
  );
};

export default CourseReportTile;
