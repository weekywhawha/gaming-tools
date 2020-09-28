import { Command, flags } from '@oclif/command'
import { getWeatherInfo } from '@gaming-tools/libraries/weather'

export default class Weather extends Command {
  static description = 'Weather forecast for a requested location.'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'command', required: true }]

  async run() {
    const { args } = this.parse(Weather)

    try {
      const weatherInfo = await getWeatherInfo(args.command)

      this.log('-----------------------')
      this.log(`Weather forecast for ${weatherInfo.observationpoint}:`)
      this.log(
        `UTC${Number(weatherInfo.timezone) === 0 ? `±${weatherInfo.timezone}` : weatherInfo.timezone} ${
          weatherInfo.date
        }`
      )
      this.log('')
      this.log(`${weatherInfo.skytext}`)
      this.log(`Temperature: ${weatherInfo.temperature}°C`)
      this.log(`Wind: ${weatherInfo.winddisplay}`)
      this.log(`Humidity: ${weatherInfo.humidity}%`)
      this.log('-----------------------')
    } catch (error) {
      return this.warn(error)
    }
  }
}
