import React, { FC } from "react"

import { CardProps, UrlLinkProps } from "./Card.d"

const UrlLink: FC<UrlLinkProps> = ({ url, children = undefined }) => {
  if (url) {
    return <a href={url}>{children}</a>
  }
  return <>{children}</>
}
export const Card: FC<CardProps> = ({
  Image,
  header,
  body,
  url = undefined,
  cardType = "article",
  categories = [],
  timeToRead = undefined,
  learnMoreToggle,
  learnMoreContent = null,
}) => {
  const categoryLinks = categories.map((category) => (
    <a key={category.url} href={category.url}>
      {category.name}
    </a>
  ))
  return (
    <div className={`card card_${cardType}`}>
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
      {learnMoreToggle ? learnMoreContent || <a className="card__learn-more">Learn more</a> : null}
    </div>
  )
}
