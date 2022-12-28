import React from "react"

export interface BannerContentProps {
  children: React.ReactNode
}

export const BannerContent = ({ children }: BannerContentProps): JSX.Element => (
  <div className="banner__content-container">{children}</div>
)
