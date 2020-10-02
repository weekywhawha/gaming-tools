import { ApiError } from '../error/api-error'
import { getTwitchInfo } from '@gaming-tools/libraries'
import { Info } from 'api/types/info'

export class Twitch {
  static  info: Info =  async (req, res, next) => {
    
    const { id } = req.body

    try {
      res.send(await getTwitchInfo(id))
    } catch (error) {
      next(ApiError.badRequest(error))
    }
  }
}
