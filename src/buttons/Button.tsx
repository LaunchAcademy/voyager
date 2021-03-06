import React, { FC } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ButtonProps } from "./Button.d"

export const Button: FC<ButtonProps> = ({
  text,
  children,
  to,
  onClick,
  size = "lg",
  secondary = false,
  placement,
  icon,
  iconSize = "1x",
  className = "",
  hideText = false,
}) => {
  const modifiers = []
  if (secondary) {
    modifiers.push("button_secondary")
  }
  if (placement === "banner") {
    modifiers.push("banner__button")
  } else if (placement === "photo") {
    modifiers.push("banner-photo__button")
  }

  let faIcon
  if (icon) {
    faIcon = <FontAwesomeIcon size={iconSize} fixedWidth={true} icon={icon} />
  }

  if (hideText) {
    modifiers.push("button_text-hidden")
  }

  if (to || onClick) {
    return (
      <a
        onClick={onClick}
        className={`button button_size_${size} ${modifiers.join(" ")} ${className || ""}`}
        href={to}
      >
        {children || (hideText ? null : text)}
        {faIcon}
      </a>
    )
  }
  return null
}

export default Button
