import React from "react";
import MobileDeviceTile from "../deviceProjectTile/MobileDeviceTile.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MobileProjectCard = ({ imageUrl, projectLiveUrl, projectTitle, studentName, studentProfileUrl }) => {
  let studentProfileImage = <FontAwesomeIcon icon={faUser} />
  if(studentProfileUrl) {
    studentProfileImage = <img src={studentProfileUrl} />
  }
  return (
    <article className="card card__mobile-tile">
      <section className="card_photo">
        <MobileDeviceTile studentProjectScreenshot={imageUrl} />
      </section>
      <section className="project-tile_student-info">
        <figure className="student-info_student-profile">
          {studentProfileImage}
        </figure>
        <div className="student-info_title">
          <a href={projectLiveUrl}>
          <h4 className="card_header">{projectTitle}</h4>
          </a>
          <h6 className="card_body">{studentName}</h6>
        </div>
      </section>
    </article>
  );
}


export default MobileProjectCard;
