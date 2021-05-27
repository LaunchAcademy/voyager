import React from 'react';
import './quote.css';

const StaticQuote = ({ quote, detail }) => {
  return (
    <div className="quote__quote-content_static">
      <figure>
        <blockquote>
          <p className="quote__quote-text_static">{quote}</p>
        </blockquote>
        <hr className="quote__horizontal-line_static" />
        <figcaption>
          <h5 className="quote__quote-detail">{detail}</h5>
        </figcaption>
      </figure>
    </div>
  )
};


export default StaticQuote;
