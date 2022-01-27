import React from "react";
import "./roundedCard.css";

const RoundedCard = ({
  overHeader,
  title,
  descriptionText,
  altText,
  Image
}) => {
  let whichProfileClass = "profile";

  let overHeaderElement = overHeader ? <h6> {overHeader} </h6> : null
  

  return (
    <div className={whichProfileClass}>
      {Image && <Image className="profile__image" />}
      {overHeaderElement}
      <h5 className="profile__name">{title}</h5>
      <p>{descriptionText}</p>
      {socialList}
    </div>
  );
};

export default RoundedCard;
