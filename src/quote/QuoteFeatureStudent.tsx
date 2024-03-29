import React from "react"

import { QuoteAuthorProps } from "./QuoteAuthor"

export interface QuoteFeatureStudentProps extends QuoteAuthorProps {
  studentImageUrl?: string
}

export const QuoteFeatureStudent = ({
  name,
  company,
  studentImageUrl,
}: QuoteFeatureStudentProps): JSX.Element => {
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
