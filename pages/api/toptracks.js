import { topTracks } from "../lib/spotify"

export default async function handler(req, res) {
  const response = await topTracks()
  const {items} = await response.json()
  res.send(items)
}