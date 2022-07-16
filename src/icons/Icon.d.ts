import { IconProp, IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface IconProps {
  icon: IconProp | IconDefinition
  fixedWidth?: boolean
  className?: string
  onClick?: () => void
}
