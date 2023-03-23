import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

export const authOptions = {
  providers: [
    SpotifyProvider({
      authorization: 'https://accounts.spotify.com/authorize?scope=user-read-currently-playing,user-top-read,user-read-email',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({token, account}) {
      if(account) {
        token.accessToken = account.refresh_token
      }
      return token
    },
    async session(session, user) {
      session.user = user
      return session
    }
  },
  debug: true
}

export default NextAuth(authOptions)