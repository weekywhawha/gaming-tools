import { ApiError } from '../error/api-error'
import { getWeatherInfo } from '@gaming-tools/libraries'
import { Info } from '../types/info'

export class Weather {
  static info: Info = async (req, res, next) => {
    const { location } = req.body

    if (!location) {
      return next(ApiError.badRequest('invalid parameter'))
    }
    try {
      res.send(await getWeatherInfo(location))
    } catch (error) {
      next(ApiError.badRequest(error))
    }
  }
}
