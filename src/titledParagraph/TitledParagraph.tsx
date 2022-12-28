import React from "react"

export interface TitledParagraphProps {
  title: string
  children: React.ReactNode
}

export const TitledParagraph = ({ title, children }: TitledParagraphProps): JSX.Element => (
  <section className="titled-paragraph">
    <div className="titled-paragraph__container">
      <h3 className="titled-paragraph__title">{title}</h3>
      {children}
    </div>
  </section>
)
