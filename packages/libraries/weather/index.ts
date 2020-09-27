import weatherJS from 'weather-js'
import { WeatherInfo } from '@gaming-tools/types/weather-info'

export const getWeatherInfo = async function (command: string): Promise<WeatherInfo> {
  return new Promise((resolve, reject) => {
    weatherJS.find({ search: command, degreeType: 'C' }, (error: string, result: any) => {
      if (error) {
        return reject('please specify a location (e.g. London,UK)')
      }

      if (result === undefined || result.length === 0) {
        return reject('invalid location.')
      }

      const current = result[0].current
      const location = result[0].location

      const timezone = location.timezone > 0 ? `+${location.timezone}` : location.timezone

      const weatherData: WeatherInfo = {
        skytext: current.skytext,
        observationpoint: current.observationpoint,
        imageUrl: current.imageUrl,
        date: current.date,
        winddisplay: current.winddisplay,
        temperature: current.temperature,
        feelslike: current.feelslike,
        humidity: current.humidity,
        timezone,
      }
      return resolve(weatherData)
    })
  })
}
