import React from "react";
import bullets from "../../src/assets/images/bullets.svg";

const ModuleLearningObjective = ({ objectiveDescription }) => (
  <div className="module-learning-objective">
    <div className="module-learning-objective__icon">
      <span dangerouslySetInnerHTML={{ __html: bullets }} />
    </div>
    <p className="module-learning-objective__description">{objectiveDescription}</p>
  </div>
);

export default ModuleLearningObjective;
