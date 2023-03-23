import { topTracks } from "../../lib/spotify"

export default async function handler(req, res) {
  const token = req.query.token
  const response = await topTracks(token)
  const {items} = await response.json()
  res.send(items)
}