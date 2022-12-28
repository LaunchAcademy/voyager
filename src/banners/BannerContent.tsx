import React, { FC } from "react"

export interface BannerContentProps {
  children: React.ReactNode
}

export const BannerContent: FC<BannerContentProps> = ({ children }) => (
  <div className="banner__content-container">{children}</div>
)
