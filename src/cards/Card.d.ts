import { FC } from "react"

export interface CardProps extends Card {
  cardType?: string | "article"
  url?: string
  Image: FC
}

export interface UrlLinkProps {
  url?: string
}

export interface CardListProps {
  content: (Card | ProjectCard)[]
  cardType: "article" | string
  numberOfColumns: number
  className?: string
  learnMoreToggle: boolean
  learnMoreContent?: JSX.Element | JSX.Element[]
}

interface Card extends BaseCard {
  mobile?: boolean
  header: string
  body: string
  articleUrl?: string
  categories?: { name: string; url: string }[]
  timeToRead?: number
  learnMoreToggle?: boolean
  learnMoreContent: unknown
}

interface ProjectCardProps extends BaseCard {
  projectTitle?: string
  studentName?: string
  studentProfileUrl?: string
  projectLiveUrl?: string
}

interface BaseCard {
  id?: number
  Image?: FC
}
