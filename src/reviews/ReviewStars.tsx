import React, { FC } from "react"

import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ReviewStarsProps } from "./reviews.d"

export const ReviewStars: FC<ReviewStarsProps> = ({ rating }) => {
  // eslint-disable-next-line prefer-const
  let starsList = []
  for (let i = 0; i < rating; i++) {
    starsList.push(
      <li key={i}>
        <FontAwesomeIcon icon={faStar} />
      </li>
    )
  }

  return <ul className="scores__stars">{starsList}</ul>
}
