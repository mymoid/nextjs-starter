import { NextRequest, NextResponse } from 'next/server'
import { useLocaleInServer } from '@/utils/useLocaleInServer'

export const GET = async function GET(request: NextRequest) {
  const t = await useLocaleInServer(request)
  return NextResponse.json({ message: t('test_response') }, { status: 200 })
}
