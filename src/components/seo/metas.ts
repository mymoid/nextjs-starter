export type MetaType = {
  title?: string
  description?: string
  keywords?: string
  noindex?: boolean
}
interface MetaConfig {
  [key: string]: MetaType
}
export const META_CONFIGS = {
  default: {
    metadataBase: new URL('https://web.com'),
    title: 'Web | MYMOID',
    description:
      'MYMOID is the ultimate payment gateway experience. We make it possible to pay for products and services internationally. We make payments versatile, secure, scalable and omnichannel.',
    keywords:
      'online payment platform, payment orchestrator, payment flow, payment platform, payment strategy, smart routing, intelligent payment, payment gateway, online payment gateway',
    noindex: false,
    openGraph: {
      title: 'Web | MYMOID',
      type: 'website',
      description:
        'MYMOID is the ultimate payment gateway experience. We make it possible to pay for products and services internationally. We make payments versatile, secure, scalable and omnichannel.'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Web | MYMOID',
      description:
        'MYMOID is the ultimate payment gateway experience. We make it possible to pay for products and services internationally. We make payments versatile, secure, scalable and omnichannel.',
      images: ['/images/mymoid-brandcard.jpg'],
      robots:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    }
  }
} as MetaConfig
