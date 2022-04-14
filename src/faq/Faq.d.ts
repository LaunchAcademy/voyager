export interface FaqProps {
  title: string
  description: string
  selected: boolean
  handleClick: () => void
}

export interface FaqListProps {
  questions: { id: number; title: string; description: string }[]
}
