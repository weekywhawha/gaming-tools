import { Command, flags } from '@oclif/command'
import { rollDice } from '@gaming-tools/libraries/roll'

export default class Roll extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'command', required: true }, { name: 'comment' }]

  async run() {
    const { args } = this.parse(Roll)

    try {
      const result = await rollDice(args.command, args.comment)
      return console.log(result)
    } catch (error) {
      return console.warn(error)
    }
  }
}
