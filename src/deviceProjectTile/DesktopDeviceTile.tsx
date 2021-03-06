import React, { FC } from "react"

import { DeviceTileProps } from "./DeviceProjectTile.d"

export const DesktopDeviceTile: FC<DeviceTileProps> = ({ Image }) => {
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
  )
}
