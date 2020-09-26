import { Command, flags } from '@oclif/command'
import { getRollDice } from '@gaming-tools/libraries/roll'

export default class Roll extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'command', required: true }, { name: 'comment' }]

  async run() {
    const { args } = this.parse(Roll)

    try {
      const result = await getRollDice(args.command, args.comment)
      return this.log(result.replace(/\*/g, ''))
    } catch (error) {
      return this.warn(error)
    }
  }
}
