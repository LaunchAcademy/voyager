import React from "react"

const FeatureList = ({ subtitle, title, footerText, children, prefixContent }) => (
  <section className="feature-list relative">
    <div className="container feature-list__prefix-container">
      {prefixContent && <div className="feature-list__prefix-content">{prefixContent}</div>}
    </div>
    <div className="feature-list__content-wrap">
      <div className="content-wrap__header-container  z-10">
        <h2 className="header-container__title">{title}</h2>
        <h3 className="header-container__subtitle">{subtitle}</h3>
      </div>
      <div className="content-wrap__grid">{children}</div>
      <div className="content-wrap__footer-container">
        <h2 className="footer-container__text">{footerText}</h2>
      </div>
    </div>
  </section>
)

export default FeatureList
