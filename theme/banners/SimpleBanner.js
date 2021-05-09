import React from "react";
import PropTypes from "prop-types";
import "./banners.css";

const SimpleBanner = ({ children, backgroundImageUrl }) => (
  <section className="banner_photo" style={{ "background-image": `url("${backgroundImageUrl}")` }}>
    <div className="banner_content">
      {children}
    </div>
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
