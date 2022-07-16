import React, { FC } from "react"

import { QuoteFeatureStudentProps } from "./Quote.d"

export const QuoteFeatureStudent: FC<QuoteFeatureStudentProps> = ({
  name,
  company,
  studentImageUrl,
}) => {
  return (
    <figcaption className="quote__student">
      <img className="student__profile-image" src={studentImageUrl} />
      <div className="student__text-info">
        <h5 className="text-info__name">{name}</h5>
        <h6 className="text-info__company">{company}</h6>
      </div>
    </figcaption>
  )
}
