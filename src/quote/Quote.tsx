import React, { FC } from "react"

import { QuoteProps } from "./Quote.d"
import { QuoteAuthor } from "./QuoteAuthor"
import { QuoteFeatureStudent } from "./QuoteFeatureStudent"
import "./css/quote.css"

export const Quote: FC<QuoteProps> = ({
  quoteType = "hero",
  quote,
  name,
  company,
  studentImageUrl,
}) => {
  let quoteTypeClass = "quote"
  let quoteAuthor = <QuoteAuthor name={name} company={company} />

  if (quoteType === "banner") {
    quoteTypeClass += " quote_banner"
  } else if (quoteType === "student") {
    quoteTypeClass += " quote_feature-student"
    quoteAuthor = (
      <QuoteFeatureStudent name={name} company={company} studentImageUrl={studentImageUrl} />
    )
  } else if (quoteType === "hero") {
    quoteTypeClass += " quote_hero"
  }

  return (
    <div className={quoteTypeClass}>
      <div className="quote__icon">
        <p>”</p>
      </div>
      <figure className="quote__content">
        <blockquote>
          <p className="quote__text">&quot;{quote}&quot;</p>
        </blockquote>
        <hr className="quote__horizontal-line" />
        {quoteAuthor}
      </figure>
    </div>
  )
}
