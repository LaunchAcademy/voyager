import React from "react";

const Card = ({ imageUrl, header, body, articleUrl, articleTitle, articleTime }) => {
  return (
    <div className="card">
      <figure className="card__photo">
        <img className="card__photo-image" src={imageUrl} />
      </figure>
      <h3 className="card__header">{header}</h3>
      <p className="card__body">{body}</p>
      <section className="card__readmore">
        <a href={articleUrl}>{articleTitle}</a>
        <p>{articleTime}</p>
      </section>
    </div>
  );
};

export default Card;
