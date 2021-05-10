import React from "react";
import PropTypes from "prop-types";
import "./banners.css";

const BannerTitle = ({ children }) => (
  <h3 className="banner__title">
    {children}
  </h3>
);

BannerTitle.defaultProps = {
  children: undefined,
};
BannerTitle.propTypes = {
  children: PropTypes.node,
};

export default BannerTitle;
