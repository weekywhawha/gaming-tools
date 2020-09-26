import axios from 'axios'

const token = process.env.TWITCH_TOKEN
const clientId = process.env.TWITCH_ID

export const getTwitchInfo = async function (command: string): Promise<typeof twitchData> {
  if (!command) {
    return Promise.reject("you didn't provide a username to search for.")
  }
  const credentials = await axios({
    method: 'POST',
    url: 'https://id.twitch.tv/oauth2/token',
    params: {
      client_id: clientId,
      client_secret: token,
      grant_type: 'client_credentials',
      redirect_uri: 'http://localhost',
    },
  })

  let stream

  try {
    stream = await axios({
      method: 'GET',
      url: 'https://api.twitch.tv/helix/streams',
      headers: {
        'client-id': clientId,
        Authorization: `Bearer ${credentials.data.access_token}`,
      },
      params: {
        user_login: `${command}`,
        first: 1,
      },
    })
  } catch (error) {
    return Promise.reject('there was an error while retrieving the data')
  }

  if (!stream.data.data.length) {
    return Promise.reject("the streamer you are looking for is not online or doesn't exist.")
  }

  const info = stream.data.data[0]
  const gameId: number = info.game_id
  const name: string = info.user_name
  const title: string = info.title
  const viewers: number = info.viewer_count
  const thumbnail: string = info.thumbnail_url.replace(`{width}`, '640').replace(`{height}`, '360')

  const game = await axios({
    method: 'GET',
    url: 'https://api.twitch.tv/helix/games',
    headers: {
      'client-id': clientId,
      Authorization: `Bearer ${credentials.data.access_token}`,
    },
    params: {
      id: gameId,
    },
  })

  if (!game.data.data.length) {
    return Promise.reject('game data is unreachable.')
  }

  const artwork: string = game.data.data[0].box_art_url.replace(`{width}`, '285').replace(`{height}`, '380')
  const gameName: string = game.data.data[0].name

  const twitchData = {
    name,
    title,
    viewers,
    thumbnail,
    artwork,
    gameName,
  }

  return twitchData
}
