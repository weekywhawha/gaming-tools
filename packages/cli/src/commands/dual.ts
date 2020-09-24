import { Command, flags } from '@oclif/command'
import { dualInfo } from '@gaming-tools/libraries/dual'

export default class Dual extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'command', required: true }]

  async run() {
    const { args } = this.parse(Dual)

    try {
      const dualOres = await dualInfo(args.command)
      console.log(dualOres)
    } catch (error) {
      return console.warn(error)
    }
  }
}
