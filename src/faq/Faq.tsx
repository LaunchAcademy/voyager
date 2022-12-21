import React, { FC } from "react"

import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons"

import { Icon } from "../icons/Icon"
import "./css/faq.css"

export interface FaqProps {
  title: string
  description: string
  selected: boolean
  handleClick: () => void
}

export const Faq: FC<FaqProps> = ({ title, description, selected, handleClick }) => {
  let button
  let questionClass
  if (selected) {
    questionClass = "block"
    button = <Icon icon={faMinusSquare} onClick={handleClick} />
  } else {
    questionClass = "hidden"
    button = <Icon icon={faPlusSquare} onClick={handleClick} />
  }
  return (
    <div className="faq" onClick={handleClick}>
      <div className="faq__content">
        <div className="faq__title-container">{title}</div>
        <div className="faq__icon-container">
          <button type="button">{button}</button>
        </div>
      </div>
      <p className={`faq__description ${questionClass}`}>{description}</p>
    </div>
  )
}
