import React, { useState, useEffect } from "react";
import Faq from "./Faq.js";
import "./faqList.css";

const FaqList = ({ questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState([]);

  const toggleQuestionSelect = (id) => {
    if (selectedQuestion.includes(id)) {
      setSelectedQuestion(selectedQuestion.filter(questionId => questionId !== id));
    } else {
      setSelectedQuestion([...selectedQuestion, id]);
    }
  };

  const questionListItems = questions.map((question) => {
    let selected;
    if (selectedQuestion.includes(question.id)) {
      selected = true;
    }

    const handleClick = () => {
      toggleQuestionSelect(question.id);
    };

    return (
      <Faq
        key={question.id}
        title={question.title}
        description={question.description}
        selected={selected}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="faq-list">
      <div className="faq-list__container">{questionListItems}</div>
    </div>
  );
};

export default FaqList;
