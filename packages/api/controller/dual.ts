import { ApiError } from '../error/api-error'
import { getDualInfo } from '@gaming-tools/libraries'
import { Info } from 'api/types/info'

export class Dual {
  static info: Info = async (req, res, next) => {
    const { ore } = req.body

    if (!ore) {
      return next(ApiError.badRequest('invalid parameter'))
    }

    try {
      res.send(await getDualInfo(ore))
    } catch (error) {
      next(ApiError.badRequest(error))
    }
  }
}
