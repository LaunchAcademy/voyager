import React, { useState, useEffect } from 'react';
import Faq from './Faq';
import "./faqList.css";

const FaqList = ({ incomingQuestions }) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const fetchFaq = async () => (
    setQuestions(incomingQuestions)
  )

  useEffect(() => {
    fetchFaq();
  }, []);

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
      <h1 className="faq-list__title">Freqently Asked Questions</h1>
      <div className="faq-list__container">
        {questionListItems}
      </div>
    </div>
  )
}

export default FaqList
