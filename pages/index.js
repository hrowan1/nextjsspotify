import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginButton from '@/components/login-btn'
import DataArea from '@/components/data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>FuSpo</title>
        <meta name="description" content="Spotify App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={[styles.main].join(' ')}>
        <LoginButton />
      </main>
    </>
  )
}
