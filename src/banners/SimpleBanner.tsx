import React from "react"

export interface SimpleBannerProps {
  children: React.ReactNode
  BackgroundImage: ({ className }: { className: string }) => JSX.Element
  type?: "prose" | string
  style?: React.CSSProperties
}

//note: we are deprecating backgroundImageUrl in
//favor of backgroundImageProps for responsive images
export const SimpleBanner = ({
  children,
  BackgroundImage,
  type,
  style,
}: SimpleBannerProps): JSX.Element => (
  <section className={`banner__photo banner_${type}`} style={style}>
    {BackgroundImage && (
      <div className="banner__background-photo-wrapper">
        <BackgroundImage className="banner__background-photo" />
      </div>
    )}
    <div className="banner__content">{children}</div>
  </section>
)
