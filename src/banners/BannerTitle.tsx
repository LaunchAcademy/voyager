import React, { FC } from "react"

import "./css/banners.css"
export interface BannerTitleProps {
  children: string
}

export const BannerTitle: FC<BannerTitleProps> = ({ children }) => (
  <h3 className="banner__title">{children}</h3>
)
