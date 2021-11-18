import React from "react";
import "./horizontalProfile.css";

const HorizontalProfile = ({
  name,
  currentTitle,
  formerTitle,
  imgObject = {},
  altText,
  description,
}) => {
  const {
    imgWidth,
    imgHeight,
    imgSrc,
    imgSrcSet,
    imgSizes,
    sourceSrcSet,
    sourceSizes,
    sourceType,
  } = imgObject;
  return (
    <div className="horizontal-profile">
      <picture>
        <source type={sourceType} srcset={sourceSrcSet} sizes={sourceSizes} />
        <img
          className="horizontal-profile__image"
          width={imgWidth}
          height={imgHeight}
          sizes={imgSizes}
          src={imgSrc}
          srcset={imgSrcSet}
          alt={altText}
        />
      </picture>
      <div className="horizontal-profile__content">
        <h5 className="horizontal-profile__name">{name}</h5>
        <h6 className="horizontal-profile__current-title">{currentTitle}</h6>
        <p className="horizontal-profile__description">{`Former ${formerTitle}, ${description}`}</p>
      </div>
    </div>
  );
};

export default HorizontalProfile;
