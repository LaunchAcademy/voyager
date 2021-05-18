import React from "react";
import Button from "../buttons/Button";

const TuitionPaymentPlanItem = ({ title, description, learnMoreUrl }) => {
  let button;
  learnMoreUrl ? <Button text="Learn More" to={learnMoreUrl} size="lg" className="tuition-plan__item-button" /> : null

  return (
    <div className="tuition-plan__item">
      <strong className="tuition-plan__item-title">{title}</strong>
      <p className="tuition-plan__item-description">{description}</p>
      {button}
    </div>
  )
}

export default TuitionPaymentPlanItem;