export interface QuoteAuthorProps {
  name: string
  company: string
}

export interface QuoteFeatureStudentProps extends QuoteAuthorProps {
  studentImageUrl?: string
}

export interface QuoteProps extends QuoteFeatureStudentProps {
  quoteType?: QuoteType
  quote: string
}

export type QuoteType = "hero" | "banner" | "student"
