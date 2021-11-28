import React from "react";
import PropTypes from "prop-types";
import "./banners.css";

//note: we are deprecating backgroundImageUrl in
//favor of backgroundImageProps for responsive images
const SimpleBanner = ({ children, backgroundImageUrl, backgroundImageProps, type, style = {}}) => (
  <section
    className={`banner__photo banner_${type}`}
    style={{
      ...style,
      ...(backgroundImageUrl ? { backgroundImage: `url("${backgroundImageUrl}")` } : {})
    }}
  >

    {backgroundImageProps &&
      <div className="banner__background-photo-wrapper">
        <img {...backgroundImageProps} className="banner__background-photo" />
      </div>
    }
    <div className="banner__content">{children}</div>
  </section>
);

SimpleBanner.defaultProps = {
  backgroundImageUrl: undefined,
};

SimpleBanner.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImageUrl: PropTypes.string,
};

export default SimpleBanner;
