import React from "react"

import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ReviewStars = ({ rating }) => {
  let starsList = []
  for (let i = 0; i < rating; i++) {
    starsList.push(
      <li>
        <FontAwesomeIcon key={i} icon={faStar} />
      </li>
    )
  }

  return <ul className="scores__stars">{starsList}</ul>
}

export default ReviewStars
