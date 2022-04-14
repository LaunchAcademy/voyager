import { FC } from "react"

export interface ProfileProps {
  name: string
  profileType?: string
  currentTitle?: string
  currentEmployer?: string
  formerTitle?: string
  foundingMember?: boolean
  socialUrls?: string[]
  description?: string
  Image: FC<{ className?: string; alt?: string }>
  altText?: string
}
