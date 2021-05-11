import React from 'react'
import quote from './quote.css'
import Icon from '../icons/Icon'

const Quote = ({ quote, name, company }) => {
  return (
    <div className="quote divide-x-2">
      <div className="col-span-1 text-right pr-10">
        <p className="font-normal font-quote text-6xl">”</p>
      </div>
      <div className="col-span-3 pl-10 text-left">
        <p className="pb-2 font-text">{quote}</p>
        <h6 className="font-bold leading-snug">{name}</h6>
        <h5>{company}</h5>
      </div>
    </div>
  )
}


export default Quote