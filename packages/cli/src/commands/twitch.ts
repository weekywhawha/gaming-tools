import { Command, flags } from '@oclif/command'
import { getTwitchInfo } from '@gaming-tools/libraries/twitch'
import { cli } from 'cli-ux'

export default class Twitch extends Command {
  static description = 'Get stream information for the channel requested.'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'command', required: true }]

  async run() {
    cli.action.start('running')
    const { args } = this.parse(Twitch)

    try {
      const twitchInfo = await getTwitchInfo(args.command)

      this.log('-----------------------')
      this.log(`${twitchInfo.name} is live for ${twitchInfo.viewers} viewers`)
      this.log('Title:', `${twitchInfo.title}`)
      this.log('Game:', `${twitchInfo.gameName}`)
      this.log('URL:', `https://www.twitch.tv/${twitchInfo.name}`)
      this.log('-----------------------')
      cli.action.stop()
    } catch (error) {
      return this.warn(error)
    }
  }
}
