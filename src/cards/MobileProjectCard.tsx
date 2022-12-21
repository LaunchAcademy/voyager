import React, { FC } from "react"

import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { MobileDeviceTile } from "../deviceProjectTile/MobileDeviceTile"
import { ProjectCardProps } from "./CardTile"

export const MobileProjectCard: FC<ProjectCardProps> = ({
  Image,
  projectLiveUrl,
  projectTitle,
  studentName,
  studentProfileUrl,
}) => {
  let studentProfileImage = <FontAwesomeIcon icon={faUserGraduate} />
  if (studentProfileUrl) {
    studentProfileImage = <img src={studentProfileUrl} />
  }
  return (
    <article className="card card__mobile-tile">
      <section className="card__photo">
        <MobileDeviceTile Image={Image} />
      </section>
      <section className="project-tile__student-info">
        <figure className="student-info__student-profile">{studentProfileImage}</figure>
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
