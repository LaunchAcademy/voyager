import React from "react";
import DesktopDeviceTile from "../deviceProjectTile/DesktopDeviceTile.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const DesktopProjectCard = ({ imageUrl, projectLiveUrl, projectTitle, studentName, studentProfileUrl }) => {

  let studentProfileImage = <FontAwesomeIcon icon={faUser} />
  if(studentProfileUrl) {
    studentProfileImage = <img src={studentProfileUrl} />
  }

  return (
    <article className="card card__desktop-tile">
      <section className="card__photo">
        <DesktopDeviceTile studentProjectScreenshot={imageUrl} />
      </section>
      <section className="project-tile__student-info">
        <figure className="student-info__student-profile">
          {studentProfileImage}
        </figure>
        <div className="student-info__title">
          <a href={projectLiveUrl}>
          <h4 className="card__header">{projectTitle}</h4>
          </a>
          <h6 className="card__body">{studentName}</h6>
        </div>
      </section>
    </article>
  );
}


export default DesktopProjectCard;
