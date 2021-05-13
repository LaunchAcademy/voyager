import React from 'react'

import Card from "./Card"

const CardList = ({ content, columns }) => {

  let columnClass = "card-list__columns"

  if (columns === 2) {
    columnClass += "--two-column"
  } else if (columns === 3) {
    columnClass += "--three-column"
  } 

  const cardContentArray = content.map((card)=> {
    return(
      <Card 
        photo={card.photo} 
        header={card.header}  
        body={card.body}
      />
      )
  })

  return(
    <div className={columnClass} >
      {cardContentArray}
    </div>
  )
}

export default CardList