import Image from 'next/image'
import logoSrc from '@mymoid/ui-components/logo.svg?url'
import { Open_Sans } from 'next/font/google'
import styles from './Layout.module.css'
const inter = Open_Sans({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactElement
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>nextjs-starter/auth0</p>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src={logoSrc}
            alt="MYMOID Logo"
            width={333}
            height={53}
            priority
          />
          <h2 className={[inter.className, styles.slogan].join(' ')}>
            Let’s change the payment landscape together
          </h2>
          <div className={styles.features}>{children}</div>
        </div>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  )
}
