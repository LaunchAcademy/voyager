type rating = 1 | 2 | 3 | 4 | 5

export interface ReviewStarsProps {
  rating: rating
}

interface Review {
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
}

export interface ReviewListProps {
  allReviews: ReviewProps[]
}

export interface CourseReportTileProps extends Review {
  instructorScore: rating
}

export interface SwitchupReviewTileProps extends Review {
  alumniGradYear: number
}
