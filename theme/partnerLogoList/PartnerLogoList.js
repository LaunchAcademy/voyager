import React from "react";
import "./partnerLogoList.css";

const PartnerLogoList = ({ partnerData } = {}) => {
  const listItems = partnerData.map((partner) => (
    <li className="partner-logo-list__item">
      <img key={partner.name} src={partner.logoImageUrl} alt={partner.name} />
    </li>
  ));

  return (
    <ul className="partner-logo-list">
      {listItems}
    </ul>
  );
};

export default PartnerLogoList;
