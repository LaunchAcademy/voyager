export interface QuoteAuthorProps {
  name: string
  company: string
}

export interface QuoteFeatureStudentProps extends QuoteAuthorProps {
  studentImageUrl: string
}

export interface QuoteProps extends QuoteFeatureStudentProps {
  quoteType: "hero" | "banner" | "student"
  quote: string
}
