import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import {
  Button,
  Stack,
  Avatar,
  Typography,
  Card,
  Divider,
  CardContent,
  CardActions,
  Box
} from '@mymoid/ui-components'
import { useUser } from '@/hooks'
import { ERoutes } from '@/utils/constants'

export default function Dashboard() {
  const { user } = useUser()

  return (
    <Card>
      {user && (
        <>
          <CardContent sx={{ minWidth: 400 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar variant="rounded" src={user.picture} alt={user.name} />
              <Stack>
                <Typography variant="h5" fontWeight={700} color="text.primary">
                  {[user.givenName, user.familyName].join(' ')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </Stack>
            </Box>
          </CardContent>
          <Divider />
        </>
      )}
      <CardActions>
        <Link href={ERoutes.HOME}>
          <Button variant="outlined">Go to home</Button>
        </Link>
        <Link href={ERoutes.LOGOUT_URL}>
          <Button>Logout</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export const getServerSideProps = withPageAuthRequired()
