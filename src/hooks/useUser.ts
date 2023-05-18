import { useEffect } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { User } from '@/domain'
import { getUser, refetchSSRUser } from '@/services'
import { ERoutes } from '@/utils/constants'
import usePasswordReset from './usePasswordReset'

export default function useUser() {
  const router = useRouter()
  const {
    data: user,
    mutate: mutateUser,
    error,
    isLoading,
    isValidating
  } = useSWR<User>('user', getUser)
  const { passwordState, checkPasswordChanged } = usePasswordReset(
    user?.lastPasswordReset!
  )

  useEffect(() => {
    if (user && error?.status === 401) {
      router.push(ERoutes.LOGOUT_URL)
    }
  }, [error, user])

  useEffect(() => {
    if (user) checkPasswordChanged()
  }, [user])

  useEffect(() => {
    if (passwordState.isChanged) {
      router.push(ERoutes.LOGOUT_URL)
    }
  }, [passwordState])

  return {
    user,
    isLoading,
    error,
    isValidating,
    mutateUser,
    refetchSSRUser
  }
}
