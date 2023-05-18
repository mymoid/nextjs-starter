import { UserProfile } from '@auth0/nextjs-auth0/client'

export interface UserDTO extends UserProfile {
  given_name?: string
  family_name?: string
  last_password_reset?: string
  app_metadata: AppMetadata
  user_metadata: UserMetadata
}

interface AppMetadata {
  is_deleted?: boolean
  deleted_at?: Date
}

interface UserMetadata {
  city: string
  company: string
  country: string
  github_url: string
  phone: string
  phonecode: string
  position: string
}
