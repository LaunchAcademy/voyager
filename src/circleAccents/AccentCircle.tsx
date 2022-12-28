import React from "react"

export interface AccentCircleProps {
  width: number
  color: string
  className: string
}

export const AccentCircle = ({
  width = 8,
  color = "white",
  ...props
}: AccentCircleProps): JSX.Element => {
  return (
    <div
      {...props}
      className={`accent-circle accent-circle__${color} w-${width} h-${width} ${props.className}`}
    ></div>
  )
}
