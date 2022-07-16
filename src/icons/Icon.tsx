import React, { FC } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { IconProps } from "./Icon.d"

export const Icon: FC<IconProps> = ({ icon, fixedWidth = false, className }) => (
  <FontAwesomeIcon icon={icon} className={`${className}`} fixedWidth={fixedWidth} width="18" />
)

export default Icon
