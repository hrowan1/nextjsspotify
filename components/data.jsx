import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import styles from '@/styles/data.module.css'

export default function DataArea(topSongsData) {
    const { data: session } = useSession()

    const songs = topSongsData.topSongsData
    const s = songs[19].name

    let songArray = []
    for(let i in songs) {
        songArray.push(<div>{songs[i].name}</div>)
    }

    if (session) {
        return (
        <>
            <div className={styles.topSongsGrid}>
                {songArray}
            </div>
        </>
        )
    }
    return (
        <>
            No Data
        </>
    )
}