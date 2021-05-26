import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewStars = ({ rating }) => {
 
  let starsList = []
  for(let i=0; i < rating; i++) {
    starsList.push(<li><FontAwesomeIcon key={i} icon={faStar} /></li>)
  }

  return(
    <ul className="scores__stars">{starsList}</ul>
  )

}

export default ReviewStars