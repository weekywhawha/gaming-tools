import { Command } from '../../types/command'
import { getRollDice } from '@gaming-tools/libraries'

export const roll: Command = {
  name: 'roll',
  description:
    'Executes a command given in dice notation, and returns the results.\nSee https://greenimp.github.io/rpg-dice-roller/guide/notation/ for more information about dice notation.',
  usage: '[dice-notation]',
  async execute(message, args) {
    try {
      const result = await getRollDice(args[0])
      return message.channel.send(`${message.author} ${result}`).catch(() => {
        message.reply('something went wrong! The resulting message is invalid or too long')
      })
    } catch (error) {
      return message.reply(error)
    }
  },
}
