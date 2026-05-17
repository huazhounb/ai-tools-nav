export type SubmissionType = 'tool' | 'tutorial' | 'prompt'
export type SubmissionStatus = 'pending' | 'approved' | 'rejected'

export interface SubmissionInput {
  type: SubmissionType
  name: string
  website: string
  category: string
  description: string
  freeStatus: string
  chineseSupport: string
  reason: string
  submitterName: string
  contact: string
}

export interface Submission extends SubmissionInput {
  id: string
  status: SubmissionStatus
  reviewNote: string
  createdAt: string
  updatedAt: string
}

export interface SubmissionUpdateInput {
  status?: SubmissionStatus
  reviewNote?: string
}
