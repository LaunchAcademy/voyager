import React from 'react';
import './quote.css';

const FeatureQuote = ({ quote, imageUrl, name, company }) => {
  return (
    <div className="quote_feature">
        <figure className="quote__content">
          <blockquote>
            <h2 className="quote__quote_text">{quote}</h2>
          </blockquote>
          <figcaption className="quote__student">
            <img className="student__profile-image" src={imageUrl} />
            <div className="student__text-info">
              <h5 className="text-info__name">{name}</h5>
              <h6 className="text-info__company">{company}</h6>
            </div>
          </figcaption>
        </figure>
    </div>
  )
};


export default FeatureQuote;
