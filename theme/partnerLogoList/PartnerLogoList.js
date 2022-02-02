import React from "react";
import PropTypes from "prop-types";
import "./partnerLogoList.css";

const PartnerLogoList = ({ partnerData, className } = {}) => {
  const listItems = partnerData.map((partner) => {
    let image = (<img key={partner.name} src={partner.logoImageUrl} alt={partner.name} />)
    if(partner.logoImage) {
      image = partner.logoImage
    }
    return (<li key={partner.name} className="partner-logo-list__item">
      {image}
    </li>)
  });

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
