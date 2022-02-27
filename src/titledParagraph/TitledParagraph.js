import React from "react"

const TitledParagraph = ({ title, children }) => (
  <section className="titled-paragraph">
    <div className="titled-paragraph__container">
      <h3 className="titled-paragraph__title">{title}</h3>
      {children}
    </div>
  </section>
)

export default TitledParagraph
