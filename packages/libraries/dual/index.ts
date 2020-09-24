import { google } from 'googleapis'

const APIKey = process.env.GOOGLE_API_KEY
const sheets = google.sheets({ version: 'v4', auth: APIKey })

export const dualInfo = async function (command: string): Promise<typeof oreInfo> {
  const searchInput = command.toLowerCase()

  if (!searchInput || searchInput.length < 4) {
    return Promise.reject(`invalid search parameter`)
  }

  const request = {
    spreadsheetId: '14iHVub5lhpK4_IeshhHALnRyKDbob14npwo7OPCFvwM',
    range: 'A3:V39',
    majorDimension: 'COLUMNS',
  }

  const { data } = await sheets.spreadsheets.values.get(request)

  if (!data.values) {
    return Promise.reject('your search did not match any item.')
  }

  const findElement = data.values?.find((element) => element.toString().toLocaleLowerCase().includes(searchInput))

  if (!findElement) {
    return Promise.reject('your search did not match any item.')
  }

  const oreName: string[] = findElement[0]
  const oreValues: number[] = findElement.slice(7)
  const planets: string[] = data.values[0].slice(7)

  const oreInfo = {
    oreName: oreName,
    oreValues: oreValues,
    planets: planets,
  }

  return oreInfo
}
