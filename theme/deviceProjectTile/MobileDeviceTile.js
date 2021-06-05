import React from 'react'
import "../../src/assets/scss/devices.min.css"
import "./deviceTiles.css"

const MobileDeviceTile = ({ studentProjectScreenshot }) => {
  return (
    <div className="mobile-device-wrapper ">
      <div className="marvel-device iphone-x device-mobile_screen">
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
        <div className="screen">
          <img className="mobile-device_student-screenshot" src={studentProjectScreenshot} />
        </div>
      </div>
    </div>
  )
}

export default MobileDeviceTile