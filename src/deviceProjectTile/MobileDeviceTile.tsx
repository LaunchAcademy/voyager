import React, { FC } from "react"

import { DeviceTileProps } from "./DeviceTileProps"

export const MobileDeviceTile: FC<DeviceTileProps> = ({ Image }) => {
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
          <Image />
        </div>
      </div>
    </div>
  )
}
