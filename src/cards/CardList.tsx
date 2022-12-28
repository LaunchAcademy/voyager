import React from "react"

import { CardTile, Card, ProjectCardProps } from "./CardTile"
import { DesktopProjectCard } from "./DesktopProjectCard"
import { MobileProjectCard } from "./MobileProjectCard"

export interface CardListProps {
  content?: Card[]
  cardType: "article" | string
  numberOfColumns: number
  className?: string
  learnMoreToggle: boolean
  learnMoreContent?: React.ReactNode
}

export const CardList = ({
  content,
  cardType = "article",
  numberOfColumns,
  className,
  learnMoreToggle = false,
  learnMoreContent = null,
}: CardListProps): JSX.Element => {
  let cardListSize = "card-list"

  if (numberOfColumns === 2) {
    cardListSize += "_medium"
  } else if (numberOfColumns === 3) {
    cardListSize += "_large"
  }

  const cardContentArray = (content || []).map((card) => {
    if (card.mobile === true) {
      const projectCard = card as ProjectCardProps
      return (
        <MobileProjectCard
          key={card.id}
          Image={
            card.Image ||
            ((): null => {
              return null
            })
          }
          projectTitle={projectCard.projectTitle}
          studentName={projectCard.studentName}
          studentProfileUrl={projectCard.studentProfileUrl}
        />
      )
    }
    if (card.mobile === false) {
      const projectCard = card as ProjectCardProps
      return (
        <DesktopProjectCard
          key={card.id}
          Image={projectCard.Image}
          projectTitle={projectCard.projectTitle}
          studentName={projectCard.studentName}
          studentProfileUrl={projectCard.studentProfileUrl}
        />
      )
    }
    return (
      <CardTile
        key={card.id}
        Image={card.Image}
        header={card.header}
        body={card.body}
        url={card.articleUrl}
        timeToRead={card.timeToRead}
        categories={card.categories}
        learnMoreToggle={learnMoreToggle}
        learnMoreContent={learnMoreContent}
      />
    )
  })

  return (
    <div className={`${[cardListSize, className, `card-list_${cardType}`].join(" ")}`}>
      {cardContentArray}
    </div>
  )
}
