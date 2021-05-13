import React from "react"
import Icon from "../icons/Icon"
import PropTypes from "prop-types";
import "./moduleLearningObjective.css";

const ModuleLearningObjective = ({ objectiveDescription }) => (
  <div className="module-learning-objective">
    <div className="module-learning-objective__icon">
      <Icon className="h-10 w-10" aria-hidden="true" name="info-circle" />
    </div>
    <p className="module-learning-objective__description">{objectiveDescription}</p>
  </div>
);

ModuleLearningObjective.propTypes = {
  objectiveDescription: PropTypes.string.isRequired,
};

export default ModuleLearningObjective;
