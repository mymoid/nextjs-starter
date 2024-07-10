'use client'

import dynamic from 'next/dynamic'

const Loading = dynamic(() =>
  import('@/components/common/Loading').then((res) => res.Loading)
)

export default function LoadingPage() {
  return <Loading sx={{ pt: 26 }} />
}
