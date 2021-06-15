import React from "react";
import MobileDeviceTile from "../deviceProjectTile/MobileDeviceTile.js";

const MobileProjectCard = ({ imageUrl, projectTitle, studentName, studentProfileUrl }) => (
  <article className="card card__mobile-tile">
    <section className="card__photo">
      <MobileDeviceTile studentProjectScreenshot={imageUrl} />
    </section>
    <section className="project-tile__student-info">
      <figure className="student-info__student-profile">
        <img src={studentProfileUrl} />
      </figure>
      <div className="student-info__title">
        <h4 className="card__header">{projectTitle}</h4>
        <h6 className="card__body">{studentName}</h6>
      </div>
    </section>
  </article>
);

export default MobileProjectCard;
