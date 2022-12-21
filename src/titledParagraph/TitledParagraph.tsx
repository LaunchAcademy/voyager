import React, { FC } from "react"

export interface TitledParagraphProps {
  title: string
}

export const TitledParagraph: FC<TitledParagraphProps> = ({ title, children }) => (
  <section className="titled-paragraph">
    <div className="titled-paragraph__container">
      <h3 className="titled-paragraph__title">{title}</h3>
      {children}
    </div>
  </section>
)
