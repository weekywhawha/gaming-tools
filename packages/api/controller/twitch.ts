import { ApiError } from '../error/error'
import { getTwitchInfo } from '@gaming-tools/libraries'

export class Twitch {
  static async info(req: any, res: any, next: any) {
    const id = req.params.id
    try {
      res.send(await getTwitchInfo(id))
    } catch (error) {
      next(ApiError.badRequest(error))
    }
  }
}
