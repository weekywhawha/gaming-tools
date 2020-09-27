import { Command, flags } from '@oclif/command'
import { getTwitchInfo } from '@gaming-tools/libraries/twitch'

export default class Twitch extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'command', required: true }]

  async run() {
    const { args } = this.parse(Twitch)

    try {
      const twitchInfo = await getTwitchInfo(args.command)

      this.log(`${twitchInfo.name} is live for ${twitchInfo.viewers} viewers`)
      this.log(`TITLE: ${twitchInfo.title}`)
      this.log(`GAME: ${twitchInfo.gameName}`)
      this.log(`URL: https://www.twitch.tv/${twitchInfo.name}`)
    } catch (error) {
      return this.warn(error)
    }
  }
}
