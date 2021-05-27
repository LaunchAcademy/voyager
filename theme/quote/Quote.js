import React from 'react';
import './quote.css';

const Quote = ({ quote, name, company }) => {
  return (
    <div className="quote">
      <div className="quote__quote-icon">
        <p>”</p>
      </div>
      <div className="quote__quote-content">
        <figure>
          <blockquote>
            <p className="quote__quote-text">{quote}</p>
          </blockquote>
          <hr className="quote__horizontal-line" />
          <figcaption>
            <h6 className="quote__quote-name">{name}</h6>
            <h5 className="quote__quote-company">{company}</h5>
          </figcaption>
        </figure>
      </div>
    </div>
  )
};


export default Quote;
