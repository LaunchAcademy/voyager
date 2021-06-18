import React from "react";
import PropTypes from "prop-types";
import Icon from "../icons/Icon.js";
import "./moduleLearningObjective.css";

const ModuleLearningObjective = ({ objectiveDescription }) => (
  <div className="module-learning-objective">
    <div className="module-learning-objective__icon">
      <Icon aria-hidden="true" name="info-circle" />
    </div>
    <p className="module-learning-objective__description">{objectiveDescription}</p>
  </div>
);

ModuleLearningObjective.propTypes = {
  objectiveDescription: PropTypes.string.isRequired,
};

export default ModuleLearningObjective;
