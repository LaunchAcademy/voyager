import React from "react"

import Button from "../buttons/Button"
import "./halfPageParagraph.css"

const HalfPageParagraph = ({ title, text, subtitle, icon, className }) => (
  <section className={`half-page-paragraph ${className}`}>
    <div className="half-page-paragraph__subtitle">Launch Your Career</div>
    <div className="half-page-paragraph__title">{title}</div>
    <div className="half-page-paragraph__text">{text}</div>
    <div className="half-page-paragraph__action-subtitle">{subtitle}</div>
    <div>
      <Button to="#" text="Apply Today" icon={icon} className="hero_button mt-10" size="lg" />
    </div>
  </section>
)

export default HalfPageParagraph
