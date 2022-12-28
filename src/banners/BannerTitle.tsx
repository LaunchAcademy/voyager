import React from "react"

import "./css/banners.css"
export interface BannerTitleProps {
  children: string
}

export const BannerTitle = ({ children }: BannerTitleProps): JSX.Element => (
  <h3 className="banner__title">{children}</h3>
)
