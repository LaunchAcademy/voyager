import React, { FC } from "react"

import { ProfileProps } from "./Profile.d"
import "./css/horizontalProfile.css"

export const HorizontalProfile: FC<ProfileProps> = ({
  name,
  currentTitle,
  formerTitle,
  Image,
  altText,
  description,
}) => {
  return (
    <div className="horizontal-profile">
      <Image className="horizontal-profile__image" alt={altText} />
      <div className="horizontal-profile__content">
        <h5 className="horizontal-profile__name">{name}</h5>
        <h6 className="horizontal-profile__current-title">{currentTitle}</h6>
        <p className="horizontal-profile__description">
          {formerTitle && `Former ${formerTitle},`} {description}
        </p>
      </div>
    </div>
  )
}
