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
