import React from "react"

import "./css/accentCircle.css";

const AccentCircle = ({width = 8, color = "white", ...props}) => {
  return <div {...props} className={`accent-circle accent-circle__${color} w-${width} h-${width} ${props.className}`}></div>
}

export default AccentCircle
