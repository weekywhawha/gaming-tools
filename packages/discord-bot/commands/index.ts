import { gamesCommands } from './games'
import { generalCommands } from './general'
import { miscCommands } from './misc'
import { moderationCommands } from './moderation'

export const commandsMap = {
  games: gamesCommands,
  general: generalCommands,
  misc: miscCommands,
  moderation: moderationCommands,
}

export const commands = {
  ...gamesCommands,
  ...generalCommands,
  ...miscCommands,
  ...moderationCommands,
}
