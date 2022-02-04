import React from "react";
import "./banners.css";

//note: we are deprecating backgroundImageUrl in
//favor of backgroundImageProps for responsive images
const SimpleBanner = ({ children, BackgroundImage, type, style = {}}) => (
  <section
    className={`banner__photo banner_${type}`}
    style={style}
  >

    {BackgroundImage &&
      <div className="banner__background-photo-wrapper">
        <BackgroundImage className="banner__background-photo" />
      </div>
    }
    <div className="banner__content">{children}</div>
  </section>
);

export default SimpleBanner;
