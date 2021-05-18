import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIconMap from "../icons/getIconMap";

const ReviewStars = ({ rating }) => {

  const iconMap = getIconMap();

  let starsString = []
  for(let i=0; i < rating; i++) {
    starsString.push("star") 
  }

  const starsArray = starsString.map((star) => {
    return(<FontAwesomeIcon icon={iconMap[star]} />)
  })

  return(
    <div className="text-gold">{starsArray}</div>
  )

}

export default ReviewStars