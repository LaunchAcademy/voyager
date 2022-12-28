import React, { ReactElement } from "react"

import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export type ButtonSize = "xl" | "lg" | "md" | "sm" | "xs"
export type ButtonPlacement = "banner" | "photo" | null
export type ButtonProps = {
  text?: string
  children?: ReactElement
  to?: string
  onClick?: () => void
  size?: ButtonSize
  secondary?: boolean
  placement?: ButtonPlacement
  icon?: IconProp
  iconSize?: SizeProp
  className?: string
  hideText?: boolean
}

export const Button = ({
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
}: ButtonProps): JSX.Element | null => {
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
