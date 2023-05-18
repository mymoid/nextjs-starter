import type { UserDTO, User } from '@/domain'

export const userFromDto = ({
  email,
  given_name,
  family_name,
  last_password_reset,
  picture,
  email_verified,
  user_metadata,
  app_metadata
}: UserDTO): User => ({
  email: email!,
  picture: picture!,
  givenName: given_name!,
  lastPasswordReset: last_password_reset!,
  emailVerified: email_verified!,
  familyName: family_name!,
  isDeleted: app_metadata?.is_deleted,
  deletedAt: app_metadata?.deleted_at,
  phonecode: user_metadata?.phonecode,
  phone: user_metadata?.phone,
  country: user_metadata?.country,
  city: user_metadata?.city,
  company: user_metadata?.company,
  position: user_metadata?.position,
  githubUrl: user_metadata?.github_url
})
