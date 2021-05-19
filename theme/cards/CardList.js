import React from 'react'

import Card from "./Card"

const CardList = ({ content, numberOfColumns }) => {

  let cardListSize = "card-list"

  if (numberOfColumns === 2) {
    cardListSize += "--medium"
  } else if (numberOfColumns === 3) {
    cardListSize += "--large"
  }

  const cardContentArray = content.map((card) => {
    return (
      <Card
        key={card.id}
        photo={card.photo}
        header={card.header}
        body={card.body}
      />
    )
  })

  return (
    <div className={cardListSize} >
      {cardContentArray}
    </div>
  )
}

export default CardList