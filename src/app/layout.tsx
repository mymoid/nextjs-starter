import { UserProvider } from '@auth0/nextjs-auth0/client'
import logoSrc from '@mymoid/ui-components/logo.svg?url'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry'
import styles from './styles.module.css'
import './global.css'

const inter = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <ThemeRegistry>
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
          </ThemeRegistry>
        </body>
      </UserProvider>
    </html>
  )
}
