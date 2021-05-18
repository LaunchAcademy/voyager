import React, { useState, useEffect } from 'react';
import Faq from './Faq';
import "./faqList.css";

const FaqList = ({ questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const toggleQuestionSelect = id => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => {
      toggleQuestionSelect(question.id)
    }

    return (
      <Faq
        key={question.id}
        title={question.title}
        description={question.description}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="faq-list">
      <div className="faq-list__container">
        {questionListItems}
      </div>
    </div>
  )
}

export default FaqList
