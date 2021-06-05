import React from "react";
import DesktopDeviceTile from "../deviceProjectTile/DesktopDeviceTile.js";

const DesktopProjectCard = ({
  imageUrl, projectTitle, studentName, studentProfileUrl,
}) => (
  <article className="card card__desktop-tile">
    <section className="card_photo">
      <DesktopDeviceTile studentProjectScreenshot={imageUrl} />
    </section>
    <section className="project-tile_student-info">
      <figure className="student-info_student-profile">
        <img src={studentProfileUrl} />
      </figure>
      <div className="student-info_title">
        <h4 className="card_header">{projectTitle}</h4>
        <h6 className="card_body">{studentName}</h6>
      </div>
    </section>
  </article>
);

export default DesktopProjectCard;
