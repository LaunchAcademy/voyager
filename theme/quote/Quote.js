import React from 'react';
import './quote.css';
import QuoteAuthor from './QuoteAuthor';
import QuoteFeatureStudent from './QuoteFeatureStudent'

const Quote = ({ quoteType, quote, name, company, studentImageUrl }) => {

  let quoteTypeClass = "quote"
  let quoteAuthor = <QuoteAuthor name={name} company={company} />

  if(quoteType === "banner") {
    quoteTypeClass += " quote_banner"
  } else if(quoteType === "student") {
    quoteTypeClass += " quote_feature-student"
    quoteAuthor = <QuoteFeatureStudent name={name} company={company} studentImageUrl={studentImageUrl} />
  }

  return (
    <div className={quoteTypeClass}>
      <div className="quote__icon">
        <p>”</p>
      </div>
      <figure className="quote__content">
        <blockquote>
          <p className="quote__text">"{quote}"</p>
        </blockquote>
        <hr className="quote__horizontal-line" />
        {quoteAuthor}
      </figure>
    </div>
  )
};


export default Quote;
