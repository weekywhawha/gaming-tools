import { getDualInfo } from '@gaming-tools/libraries'
import { MessageEmbed } from 'discord.js'
import { Command } from '../../types/command'

export const dual: Command = {
  name: 'dual',
  description: 'Information about Dual Universe ores, please input at least 4 characters for the search.',
  usage: '[argument]',
  async execute(message, args) {
    try {
      const dualInfo = await getDualInfo(args[0])

      const displayInfo = new MessageEmbed()
        .setTitle(`${dualInfo.oreName}`)
        .addField(
          'Planets',
          dualInfo.planets.map((str: string) => str.substring(0)),
          true
        )
        .addField('\u200b', '\u200b', true)
        .addField('Depth (m)', `${dualInfo.oreValues.toString().replace(/,/g, ' \u200b\n')}`, true)
        .addField('\u200b', '\u200b', false)
        .setFooter('source: docs.google.com', 'https://ssl.gstatic.com/docs/common/product/sheets_app_icon1.png')

      await message.channel.send(displayInfo)
    } catch (error) {
      return message.reply(error)
    }
  },
}
