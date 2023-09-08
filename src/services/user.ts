export async function refetchSSRUser(): Promise<any> {
  await fetch('/api/auth/refetch')
}
