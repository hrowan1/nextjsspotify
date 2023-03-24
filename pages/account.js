import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/account.module.css'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import DataArea from '@/components/data'
import { topTracks } from "../lib/spotify"


const inter = Inter({ subsets: ['latin'] })

export default function Page({items}) {
    return (
        <>
        <Head>
            <title>Account</title>
            <meta name="description" content="Spotify App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={[styles.main, inter.className].join(' ')}>
            <DataArea topSongsData={items} />
        </main>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    const token = session.token.accessToken
    const response = await topTracks(token)
    const {items} = await response.json()
    return {
        props: {
            items
        }
    }
}
