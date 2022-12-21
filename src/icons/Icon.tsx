import React, { FC } from "react"

import { IconProp, IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { IconDefinition as SolidIconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

export interface IconProps {
  icon: IconProp | IconDefinition | SolidIconDefinition
  fixedWidth?: boolean
  className?: string
  onClick?: () => void
}

export const Icon: FC<IconProps> = ({ icon, fixedWidth = false, className }) => (
  <FontAwesomeIcon icon={icon} className={`${className}`} fixedWidth={fixedWidth} width="18" />
)

export default Icon
