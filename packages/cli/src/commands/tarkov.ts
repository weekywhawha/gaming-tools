import { Command, flags } from '@oclif/command'
import { runTarkovCommand } from '@gaming-tools/libraries/tarkov'
import { cli } from 'cli-ux'
import { getBrowser } from '@gaming-tools/libraries/puppeteer'

export default class Tarkov extends Command {
  static description = 'Escape from Tarkov information using these specific arguments:\nammo, barter, customs, factory, interchange, keys, labs, market, reserve, search, shoreline, woods.'

  static flags = {
    help: flags.help({ char: 'h' }),
    string: flags.string({ char: 's' }),
  }

  static args = [{ name: 'command', required: true }]

  async run() {
    cli.action.start('running')
    const { args, flags } = this.parse(Tarkov)

    try {
      const result = await runTarkovCommand(args.command, flags.string as string)

      if (result.category === 'map') {
        this.log('-----------------------')
        this.log('Raid Duration:', `${result.raidDuration}`)
        this.log('Players:', `${result.playerNumbers}`)
        this.log('Enemies:', `${result.enemies}`)
        this.log('URL:', `${result.url}`)
        this.log('-----------------------')
      }

      if (result.category === 'market') {
        const marketInfo = []

        for (const [i, item] of result.items.entries()) {
          marketInfo.push({
            item,
            price: result.avgPrice[i].replace(/\s/g, ''),
          })
        }

        this.log('-----------------------')
        cli.table(marketInfo, {
          item: {
            minWidth: 15,
          },
          price: {
            header: 'Price per slot',
          },
        })
        this.log('-----------------------')
      }

      if (result.category === 'ammo') {
        this.log('-----------------------')
        this.log(`${result.newDate}`)
        this.log(result.image)
        this.log('-----------------------')
      }
      (await getBrowser()).close()

      cli.action.stop()
    } catch (error) {
      return this.warn(error)
    }
  }
}
