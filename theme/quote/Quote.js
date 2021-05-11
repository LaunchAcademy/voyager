import React from 'react'
import quote from './quote.css'
import Icon from '../icons/Icon'

const Quote = ({ quote, name, company }) => {
  return (
    <div className="quote">
      <div className="quote__quote_icon">
        <p>”</p>
      </div>
      <div className="quote__quote_content">
        <p className="quote__quote_text">{quote}</p>
        <hr className="quote__horizontal_line" />
        <h6 className="quote__quote_name">{name}</h6>
        <h5 className="quote__quote_company">{company}</h5>
      </div>
    </div>
  )
}


export default Quote