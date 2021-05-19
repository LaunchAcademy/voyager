import React from 'react';
import './quote.css';

const Quote = ({ quote, name, company }) => {
  return (
    <div className="quote">
      <div className="quote__quote_icon">
        <p>”</p>
      </div>
      <div className="quote__quote_content">
        <figure>
          <blockquote>
            <p className="quote__quote_text">{quote}</p>
          </blockquote>
          <hr className="quote__horizontal_line" />
          <figcaption>
            <h6 className="quote__quote_name">{name}</h6>
            <h5 className="quote__quote_company">{company}</h5>
          </figcaption>
        </figure>
      </div>
    </div>
  )
};


export default Quote;