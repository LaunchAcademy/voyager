import React from "react";
import Icon from "../icons/Icon.js";

const FeatureListItem = ({ title, subtitle, description, iconName }) => (
  <div className="grid__item">
    <div className="item__icon">
      <Icon aria-hidden="true" name={iconName} />
    </div>
    <div className="item__content">
      <strong className="content__title">{title}</strong>
      <div className="content__subtitle">{subtitle}</div>
      <p className="content__description">{description}</p>
    </div>
  </div>
);

export default FeatureListItem;
