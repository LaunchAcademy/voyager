import React, { FC } from "react"

import { BannerTitleProps } from "./Banners.d"
import "./css/banners.css"

export const BannerTitle: FC<BannerTitleProps> = ({ children }) => (
  <h3 className="banner__title">{children}</h3>
)
