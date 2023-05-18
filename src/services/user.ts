import { User } from '@/domain'

export async function getUser(): Promise<User> {
  const response = await fetch('/api/users')

  if (!response.ok) {
    const error = new Error('An error has occurred.') as any
    error.info = await response.json()
    error.status = response.status
    throw error
  }
  const data = await response.json()
  return data
}

export async function refetchSSRUser(): Promise<any> {
  await fetch('/api/auth/refetch')
}
