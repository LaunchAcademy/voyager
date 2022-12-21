import React, { FC } from "react"

export interface QuoteAuthorProps {
  name: string
  company: string
}

export const QuoteAuthor: FC<QuoteAuthorProps> = ({ name, company }) => {
  return (
    <figcaption>
      <h6 className="quote__name">{name}</h6>
      <h5 className="quote__company">{company}</h5>
    </figcaption>
  )
}
