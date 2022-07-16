import React, { FC } from "react"

import { BannerContentProps } from "./Banners.d"

export const BannerContent: FC<BannerContentProps> = ({ children }) => (
  <div className="banner__content-container">{children}</div>
)
