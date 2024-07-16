import { getTranslations } from 'next-intl/server'
import { NextRequest } from 'next/server'

export async function useLocaleInServer(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams?.get('locale') || 'en'

  const t = await getTranslations({ locale })

  return t
}
