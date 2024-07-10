import {
  Typography,
  Box,
  Placeholder,
  CircularProgress
} from '@mymoid/ui-components'

interface LoadingProps {
  sx?: {
    [key: string]: string | number
  }
}

export function Loading({ sx }: LoadingProps) {
  return (
    <Box
      sx={{
        p: 10,
        ...sx
      }}
    >
      <Placeholder
        image={CircularProgress}
        content={
          <Typography variant="body1" align="center">
            Loading data... <br />
            Please, be patient {':)'}
          </Typography>
        }
      />
    </Box>
  )
}
