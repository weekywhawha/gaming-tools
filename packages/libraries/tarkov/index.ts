export * from './ammo'
export * from './barter'
export * from './customs'
export * from './factory'
export * from './interchange'
export * from './keys'
export * from './labs'
export * from './market'
export * from './reserve'
export * from './search'
export * from './shoreline'
export * from './woods'

import { TarkovCommands } from '@gaming-tools/types/tarkov-commands'

import { ammo } from './ammo'
import { barter } from './barter'
import { customs } from './customs'
import { factory } from './factory'
import { interchange } from './interchange'
import { keys } from './keys'
import { labs } from './labs'
import { market } from './market'
import { reserve } from './reserve'
import { search } from './search'
import { shoreline } from './shoreline'
import { woods } from './woods'

export const tarkovCommands: TarkovCommands = {
  ammo,
  barter,
  customs,
  factory,
  interchange,
  keys,
  labs,
  market,
  reserve,
  search,
  shoreline,
  woods,
}
