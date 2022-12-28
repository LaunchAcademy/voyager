type rating = 1 | 2 | 3 | 4 | 5

export interface ReviewStarsProps {
  rating: rating
}

interface ReviewProps {
  id?: number
  reviewTitle: string
  reviewedAt: string
  alumniName: string
  alumniTitle: string
  verified: boolean
  overallScore: rating
  curriculumScore: rating
  jobAssistanceScore: rating
  reviewUrl: string
  reviewParagraph?: string
  children?: React.ReactNode
}

export interface ReviewListProps {
  allReviews: (CourseReportTileProps | SwitchupReviewTileProps)[]
}

export interface CourseReportTileProps extends ReviewProps {
  instructorScore: rating
}

export interface SwitchupReviewTileProps extends ReviewProps {
  alumniGradYear: number
}
