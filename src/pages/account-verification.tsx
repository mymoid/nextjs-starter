import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import {
  Container,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Icon,
  MarkEmailUnreadIcon
} from '@mymoid/ui-components'
import { useUser } from '@/hooks'
import { sendVerificationEmail } from '@/services'
import { ERoutes } from '@/utils/constants'

function AccountVerification() {
  const { user, refetchSSRUser } = useUser()
  const router = useRouter()
  const [isVerificationEmailSended, setIsVerificationEmailSended] =
    useState(false)

  function handleSendVerificationEmail() {
    sendVerificationEmail()
    setIsVerificationEmailSended(true)
  }

  const { emailVerified } = user ?? {}

  useEffect(() => {
    if (emailVerified) refetchSSRUser().then(() => router.push(ERoutes.HOME))
  }, [emailVerified, refetchSSRUser, router])

  return (
    <>
      <Box
        sx={{
          py: 20
        }}
      >
        <Container maxWidth="sm">
          <Card
            sx={{ display: 'flex', flexDirection: 'column', py: 3 }}
            elevation={1}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Icon
                color="primary"
                sx={{
                  borderRadius: '50%',
                  width: 83,
                  height: 83,
                  padding: '10px',
                  border: '2px solid',
                  textAlign: 'center'
                }}
              >
                <MarkEmailUnreadIcon sx={{ fontSize: '60px' }} />
              </Icon>
            </Box>
            <CardHeader
              title={
                <Typography align={'center'} variant="h5">
                  Check your email
                </Typography>
              }
              sx={{ display: 'flex', justifyContent: 'center' }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography align={'center'} variant="body1">
                We have sent you an email with an account verification link.
                Please check your inbox and proceed with the account
                verification flow using the email you received.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography variant="body2">
                Have you not received it?
                <Button
                  disabled={isVerificationEmailSended}
                  endIcon={!isVerificationEmailSended ? '📭' : '📬'}
                  onClick={handleSendVerificationEmail}
                >
                  Send again
                </Button>
              </Typography>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  )
}

export default AccountVerification

export const getServerSideProps = withPageAuthRequired()
