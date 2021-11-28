import React from "react";
import "./horizontalProfile.css";

const HorizontalProfile = ({
  name,
  currentTitle,
  formerTitle,
  Image,
  altText,
  description,
}) => {
  return (
    <div className="horizontal-profile">
      <Image
        className="horizontal-profile__image"
        alt={altText}
      />
      <div className="horizontal-profile__content">
        <h5 className="horizontal-profile__name">{name}</h5>
        <h6 className="horizontal-profile__current-title">{currentTitle}</h6>
        <p className="horizontal-profile__description">{`Former ${formerTitle}, ${description}`}</p>
      </div>
    </div>
  );
};

export default HorizontalProfile;
