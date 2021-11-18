import React from "react";
import PropTypes from "prop-types";
import "./banners.css";

const SimpleBanner = ({ children, imgObject = {}, altText, type }) => {
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
    <div style={{ display: "grid" }}>
      <picture
        className={`banner__photo banner_${type}`}
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
      >
        <source type={sourceType} srcset={sourceSrcSet} sizes={sourceSizes} />
        <img
          width={imgWidth}
          height={imgHeight}
          sizes={imgSizes}
          src={imgSrc}
          srcset={imgSrcSet}
          alt={altText}
        />
        <div className="banner__content">{children}</div>
      </picture>
      <div
        className="future-background-image-styling"
        style={{ gridArea: "1/1", position: "relative", placeItems: "center", display: "grid" }}
      />
    </div>
  );
};

SimpleBanner.defaultProps = {
  backgroundImageData: {},
};

SimpleBanner.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImageData: PropTypes.object,
};

export default SimpleBanner;
