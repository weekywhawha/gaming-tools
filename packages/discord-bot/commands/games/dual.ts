import { dualInfo } from '@gaming-tools/libraries/dual'
import { MessageEmbed } from 'discord.js'
import { Command } from '../../types/command'

export const dual: Command = {
  name: 'dual',
  description: 'Information about Dual Universe ores, please input at least 4 characters for the search.',
  usage: '[argument]',
  async execute(message, args) {
    try {
      const dualOres = await dualInfo(args[0])

      const displayInfo = new MessageEmbed()
        .setTitle(`${dualOres.oreName}`)
        .addField(
          'Planets',
          dualOres.planets.map((str: string) => str.substring(0)),
          true
        )
        .addField('\u200b', '\u200b', true)
        .addField('Depth (m)', `${dualOres.oreValues.toString().replace(/,/g, ' \u200b\n')}`, true)
        .addField('\u200b', '\u200b', false)
        .setFooter('source: docs.google.com', 'https://ssl.gstatic.com/docs/common/product/sheets_app_icon1.png')

      await message.channel.send(displayInfo)
    } catch (error) {
      return message.reply(error)
    }
  },
}
