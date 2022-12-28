import React, { PropsWithChildren } from "react"

export const CreativeContent = ({ children }: PropsWithChildren): JSX.Element => (
  <div className="creative-content__container">{children}</div>
)
