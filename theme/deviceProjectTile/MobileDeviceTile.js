import React from "react";
import "../../src/assets/scss/devices.min.css";
import "./deviceTiles.css";

const MobileDeviceTile = ({ imageData = {}, altText }) => {
  const {
    sourceType,
    sourceSrcSet,
    sourceSizes,
    imgWidth,
    imgHeight,
    imgSizes,
    imgSrc,
    imgSrcSet
  } = imageData;
  return (
    <div className="mobile-device-wrapper ">
      <div className="marvel-device iphone-x device-mobile__screen">
        <div className="notch">
          <div className="camera"></div>
          <div className="speaker"></div>
        </div>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="bottom-bar"></div>
        <div className="volume"></div>
        <div className="overflow">
          <div className="shadow shadow--tr"></div>
          <div className="shadow shadow--tl"></div>
          <div className="shadow shadow--br"></div>
          <div className="shadow shadow--bl"></div>
        </div>
        <div className="inner-shadow"></div>
        <div className="screen" style={{ display: "grid" }}>
          <picture layout="fullWidth" style={{ gridArea: "1/1" }}>
            <source type={sourceType} srcset={sourceSrcSet} sizes={sourceSizes} />
            <img
              className="mobile-device__student-screenshot"
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
    </div>
  );
};

export default MobileDeviceTile;
