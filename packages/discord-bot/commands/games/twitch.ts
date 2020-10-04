import { getTwitchInfo } from '@gaming-tools/libraries'
import { Command } from '../../types/command'
import { MessageEmbed } from 'discord.js'

export const twitch: Command = {
  name: 'twitch',
  description: 'Get stream information for the channel requested.',
  usage: '[argument]',
  async execute(message, args) {
    try {
      const twitchInfo = await getTwitchInfo(args[0])

      const displayInfo = new MessageEmbed()
        .setTitle(`🔴 ${twitchInfo.name} is live`)
        .setThumbnail(twitchInfo.artwork)
        .addField('Title', `${twitchInfo.title}`)
        .addField('Game', `${twitchInfo.gameName}`, true)
        .addField('Viewers', `${twitchInfo.viewers} viewers`, true)
        .attachFiles([twitchInfo.thumbnail])
        .setImage(`attachment://${twitchInfo.thumbnail.replace('https://static-cdn.jtvnw.net/previews-ttv/', '')}`)
        .setURL(`https://www.twitch.tv/${twitchInfo.name}`)
        .setFooter('source: twitch.tv', 'https://static.twitchcdn.net/assets/favicon-32-d6025c14e900565d6177.png')

      return message.channel.send(displayInfo)
    } catch (error) {
      return message.reply(error)
    }
  },
}
