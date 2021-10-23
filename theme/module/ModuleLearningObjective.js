import React from "react";
import PropTypes from "prop-types";
import Icon from "../icons/Icon.js";
import "./moduleLearningObjective.css";
import bullets from "../../src/assets/images/bullets.svg"

const ModuleLearningObjective = ({ objectiveDescription }) => (
  <div className="module-learning-objective">
    <div className="module-learning-objective__icon">
      <span dangerouslySetInnerHTML={{__html: bullets}} />
    </div>
    <p className="module-learning-objective__description">{objectiveDescription}</p>
  </div>
);

ModuleLearningObjective.propTypes = {
  objectiveDescription: PropTypes.string.isRequired,
};

export default ModuleLearningObjective;
