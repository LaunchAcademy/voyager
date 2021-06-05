import React from "react";

const Card = ({ imageUrl, header, body }) => {
  return (
    <div className="card">
      <figure className="card_photo">
        <img className="card_photo-image" src={imageUrl} />
      </figure>
      <h3 className="card_header">{header}</h3>
      <p className="card_body">{body}</p>
    </div>
  );
};

export default Card;
