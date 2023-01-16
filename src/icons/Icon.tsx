import React from "react"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { IconDefinition as SolidIconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

export interface IconProps {
  icon: IconDefinition | SolidIconDefinition
  fixedWidth?: boolean
  className?: string
  onClick?: () => void
}

export const Icon = ({ icon, fixedWidth = false, className }: IconProps): JSX.Element => (
  <FontAwesomeIcon icon={icon} className={`${className}`} fixedWidth={fixedWidth} width="18" />
)

export default Icon
