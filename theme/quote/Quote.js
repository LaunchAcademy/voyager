import React from 'react'
import quote from './quote.css'
import Icon from '../icons/Icon'

const Quote = ({ quote, name, company }) => {
  return (
    <div className="quote">
      <div className="quote__content">
        <p className="quote__quote_icon">”</p>
      </div>
      <div className="quote__quote_text">
        <p className="quote__quote_quote">{quote}</p>
        <h6 className="quote__quote_name">{name}</h6>
        <h5 className="quote__quote_company">{company}</h5>
      </div>
    </div>
  )
}


export default Quote