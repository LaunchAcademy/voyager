import React, { FC } from "react"

import { AccentCircleProps } from "./AccentCircle.d"

export const AccentCircle: FC<AccentCircleProps> = ({ width = 8, color = "white", ...props }) => {
  return (
    <div
      {...props}
      className={`accent-circle accent-circle__${color} w-${width} h-${width} ${props.className}`}
    ></div>
  )
}
