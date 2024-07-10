'use client'

import dynamic from 'next/dynamic'
import { toast } from '@mymoid/ui-components'
import LogoSrc from '@mymoid/ui-components/logo.svg'

const CodeBlock = dynamic(
  () => import('@mymoid/ui-components').then((res) => res.CodeBlock),
  { ssr: false }
)
const Box = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Box)
)
const ModeSwitcher = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.ModeSwitcher)
)
const Stack = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Stack)
)
const Typography = dynamic(() =>
  import('@mymoid/ui-components').then((res) => res.Typography)
)

export default function Home() {
  return (
    <Stack textAlign="center" spacing={5}>
      <Typography color="text.primary">
        nextjs-starter/semantic-release-app-router
      </Typography>

      <Stack alignItems="center" spacing={2}>
        <Box sx={{ width: 333, height: 53, maxWidth: '100%' }}>
          <LogoSrc />
        </Box>
        <Typography as="h2">
          Let’s change the payment landscape together
        </Typography>

        <ModeSwitcher variant="outlined" color="inherit" />
      </Stack>
      <Stack alignItems="center" spacing={2}>
        <Typography color="text.primary">Get started by editing</Typography>
        <Box sx={{ width: 333, maxWidth: '100%' }}>
          <CodeBlock
            language="js"
            codeString={'src/app/page.tsx'}
            onCopySuccess={() => {
              toast.success('Copy successfully!')
            }}
            onCopyError={() => {
              toast.error('An error occurred when you try to copy. Try again')
            }}
          />
        </Box>
      </Stack>
    </Stack>
  )
}
