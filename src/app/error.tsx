'use client'
import { Placeholder, Typography, Box, Link } from '@mymoid/ui-components'
import { Global, css } from '@emotion/react'
import systemError from '@mymoid/ui-components/systemError.svg'
import { EGlobals } from '@/utils/constants'

const styles = css`
  body {
    background-color: var(--palette-background-paper);
  }
`

export default function Custom500() {
  const inputGlobalStyles = <Global styles={styles} />
  return (
    <Box
      sx={{
        pt: '20vh'
      }}
    >
      {inputGlobalStyles}
      <Placeholder
        content={
          <Typography color="text.primary" textAlign="center">
            We are experimenting some problems.Please, try again later. <br />
            If the problem persist please{' '}
            <Link href={`mailto:${EGlobals.MYMOID_SUPPORT_EMAIL}`}>
              contact with support
            </Link>
            .
          </Typography>
        }
        image={systemError}
      />
    </Box>
  )
}
