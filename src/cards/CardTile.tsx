import React from "react"

export interface CardProps extends Card {
  cardType?: string | "article"
  url?: string
  Image: () => JSX.Element
}

export interface UrlLinkProps {
  url?: string
  children?: React.ReactNode[] | React.ReactNode
}

export interface Card extends BaseCard {
  mobile?: boolean
  header: string
  body: string
  articleUrl?: string
  categories?: { name: string; url: string }[]
  timeToRead?: number
  learnMoreToggle?: boolean
  learnMoreContent?: unknown
}

export interface ProjectCardProps extends BaseCard {
  projectTitle?: string
  studentName?: string
  studentProfileUrl?: string
  projectLiveUrl?: string
  Image: () => JSX.Element
}

interface BaseCard {
  id?: number
  Image: () => JSX.Element
}

const UrlLink = ({ url, children = undefined }: UrlLinkProps): React.ReactElement => {
  if (url) {
    return <a href={url}>{children}</a>
  }
  return <>{children}</>
}
export const CardTile = ({
  Image,
  header,
  body,
  url = undefined,
  cardType = "article",
  categories = [],
  timeToRead = undefined,
  learnMoreToggle,
  learnMoreContent = null,
}: CardProps): JSX.Element => {
  const categoryLinks = categories.map((category) => (
    <a key={category.url} href={category.url}>
      {category.name}
    </a>
  ))
  return (
    <div className={`card card_${cardType}`}>
      <>
        {Image && (
          <figure className="card__photo">
            <UrlLink url={url}>
              <Image />
            </UrlLink>
          </figure>
        )}

        <div className="card__card-content-container">
          <h3 className="card__header">
            <UrlLink url={url}>{header}</UrlLink>
          </h3>
          <p className="card__body" dangerouslySetInnerHTML={{ __html: body }} />
          {cardType === "article" && (categoryLinks.length > 0 || timeToRead) && (
            <section className="card__readmore">
              <p className="card__links">{categoryLinks}</p>
              <p className="card__time-to-read">
                <UrlLink url={url}>{timeToRead} minutes</UrlLink>
              </p>
            </section>
          )}
        </div>
        {learnMoreToggle
          ? learnMoreContent || <a className="card__learn-more">Learn more</a>
          : null}
      </>
    </div>
  )
}
