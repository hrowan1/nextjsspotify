import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"

export default function DataArea() {
    const [song, setSong] = useState('')
    const { data: session } = useSession()

    useEffect(() => {
        if(session) {
            const fetchTopSong = async () => {
                const response = await fetch(`/api/toptracks?token=${session.token.accessToken}`)
                const data = await response.json()
                setSong(data[0].name)
            }
            fetchTopSong().catch(console.error)
        } else {
            
        }
    }, [session])

    if (session) {
        return (
        <>
            {song}
        </>
        )
    }
    return (
        <>
        No Data
        </>
    )
}