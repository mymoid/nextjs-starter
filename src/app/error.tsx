'use client'

import dynamic from 'next/dynamic'
import { Global, css } from '@emotion/react'
import systemError from '@mymoid/ui-components/systemError.svg'

const Placeholder = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Placeholder)
)
const Typography = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Typography)
)
const Box = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Box)
)
const Link = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Link)
)

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
            <Link href={`#`}>contact with support</Link>.
          </Typography>
        }
        image={systemError}
      />
    </Box>
  )
}
