import { useMemo, useReducer } from 'react'

function usePasswordReset(lastPasswordResetDate: string) {
  const initialState = useMemo(
    () => ({
      lastPasswordResetDate,
      isChanged: false
    }),
    [lastPasswordResetDate]
  )
  const [passwordState, checkPasswordChanged] = useReducer(
    (state: typeof initialState) => {
      return {
        lastPasswordResetDate,
        isChanged: Boolean(
          typeof state.lastPasswordResetDate !== 'undefined' &&
            state.lastPasswordResetDate !== lastPasswordResetDate
        )
      }
    },
    initialState
  )

  return { passwordState, checkPasswordChanged }
}

export default usePasswordReset
