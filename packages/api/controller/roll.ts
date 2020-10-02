import { ApiError } from '../error/api-error'
import { getRollDice } from '@gaming-tools/libraries'
import { Info } from '../types/info'

export class Roll {
  static info: Info = async (req, res, next) => {
    const { roll } = req.body

    if(!roll){
      return next(ApiError.badRequest('invalid parameter'))
    }

    try {
      res.send(await getRollDice(roll))
    } catch (error) {
      next(ApiError.badRequest(error))
    }
  }
}
