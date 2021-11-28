import React from "react";
import "./deviceTiles.css";
import "../../src/assets/scss/devices.min.css";

const DesktopDeviceTile = (props) => {
  const imageData = {}
  return (
    <div className="desktop-device-wrapper">
      <div className="desktop-device__screen marvel-device macbook">
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="screen">
          <img className="desktop-device__student-screenshot" src={imageData} />
        </div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
};

export default DesktopDeviceTile;
