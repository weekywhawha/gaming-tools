import { getWeatherInfo } from '@gaming-tools/libraries'
import { MessageEmbed } from 'discord.js'
import { Command } from '../../types/command'

export const weather: Command = {
  name: 'weather',
  description: 'Weather forecast for a requested location.',
  usage: '[location]',
  async execute(message, args) {
    try {
      const weatherInfo = await getWeatherInfo(args[0])

      const displayInfo = new MessageEmbed()
        .setDescription(`**${weatherInfo.skytext}**`)
        .setAuthor(`Weather forecast for ${weatherInfo.observationpoint}`)
        .setThumbnail(weatherInfo.imageUrl)
        .setColor(0x111111)
        .addField(
          'Timezone',
          `UTC${Number(weatherInfo.timezone) === 0 ? `±${weatherInfo.timezone}` : weatherInfo.timezone}`,
          true
        )
        .addField('Date', `${weatherInfo.date}`, true)
        .addField('Wind', weatherInfo.winddisplay, true)
        .addField('Temperature', `${weatherInfo.temperature}°C`, true)
        .addField('Feels like', `${weatherInfo.feelslike}°C`, true)
        .addField('Humidity', `${weatherInfo.humidity}%`, true)

      return message.channel.send(displayInfo)
    } catch (error) {
      message.reply(error)
    }
  },
}
