import React from "react";
import Icon from "../icons/Icon.js";

const FeatureListItem = ({
  title, subtitle, description, iconName,
}) => (
  <div className="feature-list__item">
    <div className="feature-list__item-icon">
      <Icon className=" h-10 w-10" aria-hidden="true" name={iconName} />
    </div>
    <div className="feature-list__item-content">
      <strong className="feature-list__item-title">{title}</strong>
      <div className="feature-list__item-subtitle">{subtitle}</div>
      <p className="feature-list__item-description">{description}</p>
    </div>
  </div>
);

export default FeatureListItem;
