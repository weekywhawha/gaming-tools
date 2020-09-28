import { Command, flags } from '@oclif/command'
import { getRollDice } from '@gaming-tools/libraries/roll'

export default class Roll extends Command {
  static description = 'Executes a command given in dice notation, and returns the results.\nSee https://greenimp.github.io/rpg-dice-roller/guide/notation/ for more information about dice notation.'

  static flags = {
    help: flags.help({ char: 'h' }),
    comment: flags.string({ char: 'c'})
  }

  static args = [{ name: 'command', required: true }]

  async run() {
    const { args, flags } = this.parse(Roll)

    try {
      const result = await getRollDice(args.command, flags.comment)
      this.log('-----------------------')
      this.log(result.replace(/\*/g, ''))
      this.log('-----------------------')
    } catch (error) {
      return this.warn(error)
    }
  }
}
