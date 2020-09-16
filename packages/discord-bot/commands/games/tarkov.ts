import { tarkovMarket } from '../../libs/tarkov/market'
import { tarkovBarter } from '../../libs/tarkov/barter'
import { tarkovKeys } from '../../libs/tarkov/keys'
import { tarkovAmmo } from '../../libs/tarkov/ammo'
import { tarkovCustoms } from '../../libs/tarkov/customs'
import { tarkovFactory } from '../../libs/tarkov/factory'
import { tarkovInterchange } from '../../libs/tarkov/interchange'
import { tarkovLabs } from '../../libs/tarkov/labs'
import { tarkovReserve } from '../../libs/tarkov/reserve'
import { tarkovShoreline } from '../../libs/tarkov/shoreline'
import { tarkovWoods } from '../../libs/tarkov/woods'
import { tarkovSearch } from '../../libs/tarkov/search'

export default {
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
