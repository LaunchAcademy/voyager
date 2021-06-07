import React from "react";
import "./deviceTiles.css";
import "../../src/assets/scss/devices.min.css";

const DesktopDeviceTile = ({ studentProjectScreenshot }) => {
  return (
    <div className="desktop-device-wrapper">
      <div className="desktop-device_screen marvel-device macbook">
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="screen">
          <img className="desktop-device_student-screenshot" src={studentProjectScreenshot} />
        </div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
};

export default DesktopDeviceTile;
