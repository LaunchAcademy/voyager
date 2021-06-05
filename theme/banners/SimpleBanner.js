import React from "react";
import PropTypes from "prop-types";
import "./banners.css";

const SimpleBanner = ({ children, backgroundImageUrl, type }) => (
  <section
    className={`banner__photo banner_${type}`}
    style={{ backgroundImage: `url("${backgroundImageUrl}")` }}
  >
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
