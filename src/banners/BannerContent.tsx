import React, { FC } from "react"

export interface BannerContentProps {
  children: JSX.Element | JSX.Element[]
}

export const BannerContent: FC<BannerContentProps> = ({ children }) => (
  <div className="banner__content-container">{children}</div>
)
