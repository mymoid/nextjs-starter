'use client'

import dynamic from 'next/dynamic'
import { Global, css } from '@emotion/react'
import Error404Image from '@mymoid/ui-components/error404.svg'

const Placeholder = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Placeholder)
)
const Typography = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Typography)
)
const Box = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Box)
)

const styles = css`
  body {
    background-color: var(--palette-background-paper);
  }
`

export default function Custom404() {
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
          <Typography color="text.primary">
            The requested URL was not found on this server
          </Typography>
        }
        image={Error404Image}
      />
    </Box>
  )
}
