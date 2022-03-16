import React from "react"

export interface SimpleBannerProps {
  children: JSX.Element | JSX.Element[]
  BackgroundImage: FC<{ className: string }>
  type?: "prose" | string
  style?: React.CSSProperties
}

export interface BannerContentProps {
  children: JSX.Element | JSX.Element[]
}

export interface BannerTitleProps {
  children: string
}
