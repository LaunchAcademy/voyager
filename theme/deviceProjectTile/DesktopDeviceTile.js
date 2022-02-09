import React from "react";

const DesktopDeviceTile = ({ Image }) => {
  return (
    <div className="desktop-device-wrapper">
      <div className="desktop-device__screen marvel-device macbook">
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="screen">
          <Image className="desktop-device__student-screenshot" />
        </div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
};

export default DesktopDeviceTile;
