import React from "react";

const UrlLink = ({url, children = undefined}) => {
  if(url) {
    return <a href={url}>{children}</a>
  }
  return <>{children}</>
}
const Card = ({ imageUrl, header, body, url = undefined, cardType = "article", categories = [], timeToRead = undefined}) => {
  const categoryLinks = categories.map((category) => <a key={category.url} href={category.url}>{category.name}</a>)

  return (
    <div className={`card card_${cardType}`}>
      <figure className="card__photo">
        <UrlLink url={url}>
          <img className="card__photo-image" src={imageUrl} />
        </UrlLink>
      </figure>
      <div className="card__card-content-container">
        <h3 className="card__header">
          <UrlLink url={url}>
            {header}
          </UrlLink>
        </h3>
        <p className="card__body">{body}</p>
        {cardType === "article" &&
        (categoryLinks.length > 0 || timeToRead) &&
        (<section className="card__readmore">
          <p className="card__links">{categoryLinks}</p>
          <p className="card__time-to-read">
            <UrlLink url={url}>
              {timeToRead} minutes
            </UrlLink>
          </p>
        </section>)}
      </div>

    </div>
  );
};

export default Card;
