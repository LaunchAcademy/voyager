import React from "react";
import Icon from "../icons/Icon";

const FeatureListItem = ({ title, description, iconName }) => {
  return (
    <div className="feature-list__item">
      <div className="feature-list__item-icon">
        <Icon className=" h-10 w-10" aria-hidden="true" name={iconName} />
      </div>
      <div className="feature-list__item-content">
        <strong className="feature-list__item-title">{title}</strong>
        <p className="feature-list__item-description">{description}</p>
      </div>
    </div>
  )
}

export default FeatureListItem;