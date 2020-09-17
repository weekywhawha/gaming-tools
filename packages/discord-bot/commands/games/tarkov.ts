import {
  tarkovMarket,
  tarkovBarter,
  tarkovKeys,
  tarkovAmmo,
  tarkovSearch,
  tarkovCustoms,
  tarkovFactory,
  tarkovInterchange,
  tarkovLabs,
  tarkovReserve,
  tarkovShoreline,
  tarkovWoods,
} from 'discord-bot/libs/tarkov'
import { Command } from 'discord-bot/types/command'

export const tarkov: Command = {
  name: 'tarkov',
  description:
    'Escape from Tarkov information using these specific arguments:\nmarket | barter | keys | ammo | search | customs | factory | interchange | labs | reserve | shoreline | woods.',
  usage: '[argument] [argument(search command)]',
  execute(message, args) {
    if (!args[0]) {
      return message.reply('Please specify an argument')
    }
    switch (args[0]) {
      // market data
      case 'market':
        return tarkovMarket(message)
      case 'barter':
        return tarkovBarter(message)
      case 'keys':
        return tarkovKeys(message)
      case 'ammo':
        return tarkovAmmo(message)
      case 'search':
        return tarkovSearch(message, args)

      // maps
      case 'customs':
        return tarkovCustoms(message)
      case 'factory':
        return tarkovFactory(message)
      case 'interchange':
        return tarkovInterchange(message)
      case 'labs':
        return tarkovLabs(message)
      case 'reserve':
        return tarkovReserve(message)
      case 'shoreline':
        return tarkovShoreline(message)
      case 'woods':
        return tarkovWoods(message)
    }
  },
}
