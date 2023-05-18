export async function sendVerificationEmail() {
  const response = await fetch('/api/users/verification-email')
  const data = await response.json()
  return data
}
