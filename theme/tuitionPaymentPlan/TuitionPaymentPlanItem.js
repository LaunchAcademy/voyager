import React from "react";
import Button from "../buttons/Button";

const TuitionPaymentPlanItem = ({ title, description, learnMoreUrl }) => {
  let button = <Button text="Learn More" to={learnMoreUrl} size="lg" className="tuition-payment-plan-item__button" />;
  learnMoreUrl ? button : null

  return (
    <div className="tuition-plan__item">
      <p className="tuition-payment-plan-item__title">{title}</p>
      <p className="tuition-payment-plan-item__description">{description}</p>
      {button}
    </div>
  )
}

export default TuitionPaymentPlanItem;