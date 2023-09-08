export async function sendVerificationEmail() {
  const response = await fetch('/api/auth/send-verification-email')
  const data = await response.json()
  return data
}
