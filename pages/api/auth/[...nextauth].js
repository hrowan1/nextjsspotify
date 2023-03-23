import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({session, token}) {
      session.token = token
      return session
    }
  }
}

export default NextAuth(authOptions)