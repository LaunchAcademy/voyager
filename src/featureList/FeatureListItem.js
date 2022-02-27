import React from "react"

import scroll from "../../src/assets/scroll.svg"

const FeatureListItem = ({ title, subtitle, description, icon }) => (
  <div className="grid__item">
    <div className="item__icon">
      <span dangerouslySetInnerHTML={{ __html: scroll }} />
    </div>
    <div className="item__content">
      <strong className="content__title">{title}</strong>
      <div className="content__subtitle">{subtitle}</div>
      <p className="content__description">{description}</p>
    </div>
  </div>
)

export default FeatureListItem
