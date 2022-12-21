import React, { FC, useState } from "react"

import { Faq } from "./Faq"
export interface FaqListProps {
  questions: { id: number; title: string; description: string }[]
}

export const FaqList: FC<FaqListProps> = ({ questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState([-1])

  const toggleQuestionSelect = (id: number): void => {
    if (selectedQuestion.includes(id)) {
      setSelectedQuestion(selectedQuestion.filter((questionId) => questionId !== id))
    } else {
      setSelectedQuestion([...selectedQuestion, id])
    }
  }

  const questionListItems = questions.map((question) => {
    let selected = false
    if (selectedQuestion.includes(question.id)) {
      selected = true
    }

    const handleClick = (): void => {
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
      <div className="faq-list__container">{questionListItems}</div>
    </div>
  )
}
