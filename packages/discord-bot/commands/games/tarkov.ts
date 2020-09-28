import { runTarkovCommand } from '@gaming-tools/libraries/tarkov'
import { MessageEmbed } from 'discord.js'
import { Command } from '../../types/command'

export const tarkov: Command = {
  name: 'tarkov',
  description:
    'Escape from Tarkov information using these specific arguments:\nammo, barter, customs, factory, interchange, keys, labs, market, reserve, search, shoreline, woods.',
  usage: '[argument] [argument(search command)]',
  async execute(message, args) {
    try {
      const search = (args as string[]).slice(1).join(' ')

      const result = await runTarkovCommand(args[0], search)

      if (result.category === 'map') {
        const mapInfo = new MessageEmbed()
          .setTitle(`${result.map}`)
          .setImage(`${result.url}`)
          .addField('Raid Duration', `${result.raidDuration}`, true)
          .addField('Players', `${result.playerNumbers}`, true)
          .addField('Enemies', `${result.enemies}`, true)
          .setFooter(
            'source: escapefromtarkov.gamepedia.com',
            'https://mercury-media.cursecdn.com/avatars/0/676/635077524106421849.png'
          )

        return message.channel.send(mapInfo)
      }

      if (result.category === 'market') {
        const itemInfo = new MessageEmbed()

          .setTitle(result.title)
          .addField(
            '\u200b\nItems\n\u200b',
            result.items.map((str: string) => str.substring(0, 40)),
            true
          )
          .addField('Avg price (24h) \nPer slot\n\u200b', result.avgPrice, true)
          .addField('\u200b', '\u200b', false)
          .setFooter('source: tarkov-market.com ', 'https://tarkov-market.com/favicon-32x32.png')

        return message.channel.send(itemInfo)
      }

      if (result.category === 'ammo') {
        const ammoInfo = new MessageEmbed()
          .setDescription(`${result.newDate}`)
          .attachFiles(result.image)
          .setImage('attachment://file.jpg')
          .setFooter('source: tarkov-tools.com', 'https://tarkov-tools.com/favicon-32x32.png')

        return message.channel.send(ammoInfo)
      }
    } catch (error) {
      return message.reply(error)
    }
  },
}
