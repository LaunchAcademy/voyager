import React from "react";
import PropTypes from "prop-types";
import "./module.css";

const Module = ({
  subtitle,
  title,
  location,
  commitment,
  duration,
  detail,
  description,
  children,
  sourceType,
  sourceSrcSet,
  sourceSizes,
  imgWidth,
  imgHeight,
  imgSizes,
  imgSrc,
  imgSrcSet,
  altText
}) => {
  let details;
  location && commitment && duration
    ? (details = (
        <p>
          {location} | {commitment} | {duration}
        </p>
      ))
    : (details = <p>{detail}</p>);
  return (
    <div className="module">
      <div className="module__image-column">
        <div className="image-column__image-container">
          <picture>
            <source type={sourceType} srcset={sourceSrcSet} sizes={sourceSizes} />
            <img
              width={imgWidth}
              height={imgHeight}
              sizes={imgSizes}
              src={imgSrc}
              srcset={imgSrcSet}
              alt={altText}
            />
          </picture>
        </div>
      </div>
      <div className="module__supporting-content">
        <h2 className="supporting-content__subtitle">{subtitle}</h2>
        <h1 className="supporting-content__title">{title}</h1>
        <div className="supporting-content__info-container">{details}</div>
        <div className="supporting-content__description-container">
          <p>{description}</p>
        </div>
        <div className="supporting-content__objectives-container">{children}</div>
      </div>
    </div>
  );
};

module.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  commitment: PropTypes.string,
  duration: PropTypes.string,
  detail: PropTypes.string,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Module;
