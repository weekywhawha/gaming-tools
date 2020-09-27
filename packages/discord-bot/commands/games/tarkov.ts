import { runTarkovCommand } from '@gaming-tools/libraries/tarkov'
import { MessageEmbed } from 'discord.js'
import { Command } from '../../types/command'

export const tarkov: Command = {
  name: 'tarkov',
  description:
    'Escape from Tarkov information using these specific arguments:\nmarket | barter | keys | ammo | search | customs | factory | interchange | labs | reserve | shoreline | woods.',
  usage: '[argument] [argument(search command)]',
  async execute(message, args) {
    try {
      const result = await runTarkovCommand(args[0], args[0])

      const locationInfo = new MessageEmbed()
        .setTitle(`${result.map}`)
        .setImage(`${result.url}`)
        .addField('Raid Duration', `${result.raidDuration}`, true)
        .addField('Players', `${result.playerNumbers}`, true)
        .addField('Enemies', `${result.enemies}`, true)
        .setFooter(
          'source: escapefromtarkov.gamepedia.com',
          'https://mercury-media.cursecdn.com/avatars/0/676/635077524106421849.png'
        )

      return message.channel.send(locationInfo)
    } catch (error) {
      return message.reply(error)
    }

    // if (!args[0]) {
    //   return message.reply('please specify an argument.')
    // }

    // if (!tarkovCommands.hasOwnProperty(args[0])) {
    //   return message.reply('command not found.')
    // }

    // return tarkovCommands[args[0]].main(message, args)
  },
}
