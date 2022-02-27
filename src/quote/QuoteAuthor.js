import React from "react"

const QuoteAuthor = ({ name, company }) => {
  return (
    <figcaption>
      <h6 className="quote__name">{name}</h6>
      <h5 className="quote__company">{company}</h5>
    </figcaption>
  )
}

export default QuoteAuthor
