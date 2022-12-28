import React, { FC, PropsWithChildren } from "react"

export const CreativeContent: FC = ({ children }: PropsWithChildren) => (
  <div className="creative-content__container">{children}</div>
)
