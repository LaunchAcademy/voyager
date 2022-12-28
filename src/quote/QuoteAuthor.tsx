import React from "react"

export interface QuoteAuthorProps {
  name: string
  company: string
}

export const QuoteAuthor = ({ name, company }: QuoteAuthorProps): JSX.Element => {
  return (
    <figcaption>
      <h6 className="quote__name">{name}</h6>
      <h5 className="quote__company">{company}</h5>
    </figcaption>
  )
}
