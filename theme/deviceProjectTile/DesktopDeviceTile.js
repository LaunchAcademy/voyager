import React from 'react'

const DesktopDeviceTile = ({ studentProjectScreenshot }) => {
  return(
    <div className="desktop-device-wrapper--mobile">
      <div className="marvel-device macbook">
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="screen">
        <img className="desktop-student-screenshot" src={studentProjectScreenshot}/>
        </div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  )
}

export default DesktopDeviceTile