import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginButton from '@/components/login-btn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>FuSpo</title>
        <meta name="description" content="Spotify App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={[styles.main, inter.className].join(' ')}>
        <LoginButton />
      </main>
    </>
  )
}
