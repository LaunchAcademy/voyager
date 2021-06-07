import React from "react";
import PropTypes from "prop-types";
import "./partnerLogoList.css";

const PartnerLogoList = ({ partnerData, className } = {}) => {
  const listItems = partnerData.map((partner) => (
    <li className="partner-logo-list__item">
      <img key={partner.name} src={partner.logoImageUrl} alt={partner.name} />
    </li>
  ));

  return <ul className={`partner-logo-list ${className}`}>{listItems}</ul>;
};

PartnerLogoList.defaultProps = {
  className: undefined,
};

PartnerLogoList.propTypes = {
  partnerData: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

export default PartnerLogoList;
