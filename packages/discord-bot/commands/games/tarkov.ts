import { tarkovCommands } from '@gaming-tools/libraries/tarkov'
import { Command } from '../../types/command'

export const tarkov: Command = {
  name: 'tarkov',
  description:
    'Escape from Tarkov information using these specific arguments:\nmarket | barter | keys | ammo | search | customs | factory | interchange | labs | reserve | shoreline | woods.',
  usage: '[argument] [argument(search command)]',
  execute(message, args) {
    if (!args[0]) {
      return message.reply('please specify an argument.')
    }

    if (!tarkovCommands.hasOwnProperty(args[0])) {
      return message.reply('command not found.')
    }

    return tarkovCommands[args[0]].main(message, args)
  },
}
