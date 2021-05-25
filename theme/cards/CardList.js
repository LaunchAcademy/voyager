import React from 'react'

import Card from "./Card"
import DesktopProjectCard from "./DesktopProjectCard"
import MobileProjectCard from "./MobileProjectCard"

const CardList = ({ content, numberOfColumns }) => {

  let cardListSize = "card-list"

  if (numberOfColumns === 2) {
    cardListSize += "--medium"
  } else if (numberOfColumns === 3) {
    cardListSize += "--large"
  } 

  const cardContentArray = content.map((card)=> {
    if(card.mobile === true) {
      return(<MobileProjectCard 
        imageUrl={card.imageUrl} 
        projectTitle={card.projectTitle} 
        studentName={card.studentName} studentProfileUrl={card.studentProfileUrl}  
        />)
    } else if(card.mobile === false) {
      return(<DesktopProjectCard
        imageUrl={card.imageUrl} 
        projectTitle={card.projectTitle} 
        studentName={card.studentName} studentProfileUrl={card.studentProfileUrl}  
       />)
    }
    return(
      <Card 
        imageUrl={card.imageUrl} 
        header={card.header}  
        body={card.body}
      />
      )
  })

  return(
    <div className={cardListSize} >
      {cardContentArray}
    </div>
  )
}

export default CardList