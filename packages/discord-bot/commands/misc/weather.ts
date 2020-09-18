import weatherJS from 'weather-js'
import { MessageEmbed } from 'discord.js'
import { Command } from '../../types/command'

export const weather: Command = {
  name: 'weather',
  description: 'Checks weather forecast for a specific location.',
  usage: '[location]',
  execute(message, args) {
    weatherJS.find({ search: (args as string[]).join(''), degreeType: 'C' }, (error: string, result: any) => {
      if (error) {
        return message.reply('please specify a location.')
      }
      if (result === undefined || result.length === 0) {
        return message.reply('invalid location.')
      }

      const current = result[0].current
      const location = result[0].location

      const timezone = location.timezone > 0 ? `+${location.timezone}` : location.timezone

      const weatherInfo = new MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Timezone', `UTC${Number(timezone) === 0 ? `±${timezone}` : timezone}`, true)
        .addField('Date', `${current.date}`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Temperature', `${current.temperature}°C`, true)
        .addField('Feels like', `${current.feelslike}°C`, true)
        .addField('Humidity', `${current.humidity}%`, true)

      return message.channel.send(weatherInfo)
    })
  },
}
