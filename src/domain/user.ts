export interface User {
  name?: string
  email: string
  picture: string
  givenName: string
  lastPasswordReset: string
  emailVerified: boolean
  familyName: string
  phonecode: string
  phone: string
  country: string
  city: string
  company: string
  position: string
  githubUrl: string
  isDeleted?: boolean
  deletedAt?: Date
}
