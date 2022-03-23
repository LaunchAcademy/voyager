import React, { FC } from "react"

import { DesktopDeviceTile } from "../deviceProjectTile/DesktopDeviceTile"
import { ProjectCardProps } from "./Card.d"

export const DesktopProjectCard: FC<ProjectCardProps> = ({
  Image,
  projectLiveUrl,
  projectTitle,
  studentName,
  studentProfileUrl,
}) => {
  let studentProfileImage
  if (studentProfileUrl) {
    studentProfileImage = <img src={studentProfileUrl} />
  }

  return (
    <article className="card card__desktop-tile">
      <section className="card__photo">
        <DesktopDeviceTile Image={Image} />
      </section>
      <section className="project-tile__student-info">
        {studentProfileImage && (
          <figure className="student-info__student-profile">{studentProfileImage}</figure>
        )}
        <div className="student-info__title">
          <a href={projectLiveUrl}>
            <h4 className="card__header">{projectTitle}</h4>
          </a>
          <h6 className="card__body">{studentName}</h6>
        </div>
      </section>
    </article>
  )
}
