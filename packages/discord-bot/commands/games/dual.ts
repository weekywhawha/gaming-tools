import { google } from 'googleapis'
import { MessageEmbed } from 'discord.js'
import { Command } from '../../types/command'

const APIKey = process.env.GOOGLE_API_KEY
const sheets = google.sheets({ version: 'v4', auth: APIKey })

export const dual: Command = {
  name: 'dual',
  description: 'Information about Dual Universe ores, please input at least 4 characters for the search.',
  usage: '[argument]',
  async execute(message, args) {
    const searchInput = args[0].toLowerCase()

    if (!searchInput || searchInput.length < 4) {
      return message.reply(`invalid search parameter`)
    }

    const request = {
      spreadsheetId: '14iHVub5lhpK4_IeshhHALnRyKDbob14npwo7OPCFvwM',
      range: 'A2:V37',
      majorDimension: 'COLUMNS',
    }

    const { data } = await sheets.spreadsheets.values.get(request)

    if (!data.values) {
      return message.reply('your search did not match any item.')
    }

    const findElement = data.values?.find((element) => element.toString().toLocaleLowerCase().includes(searchInput))

    if (!findElement) {
      return message.reply('your search did not match any item.')
    }

    const oreName: string[] = findElement[0]
    const oreValues: number[] = findElement.slice(7)
    const planets: string[] = data.values[0].slice(7)

    const oreInfo = new MessageEmbed()
      .setTitle(`${oreName}`)
      .addField(
        'Planets',
        planets.map((str) => str.substring(0)),
        true
      )
      .addField('\u200b', '\u200b', true)
      .addField('Depth (m)', `${oreValues.toString().replace(/,/g, ' \u200b\n')}`, true)
      .addField('\u200b', '\u200b', false)
      .setFooter('source: docs.google.com', 'https://ssl.gstatic.com/docs/common/product/sheets_app_icon1.png')

    await message.channel.send(oreInfo)
  },
}
