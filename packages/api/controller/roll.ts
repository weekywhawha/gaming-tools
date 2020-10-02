import { ApiError } from '../error/api-error'
import { getRollDice } from '@gaming-tools/libraries'
import { Info } from '../types/info'

export class Roll {
  static info: Info = async (req, res, next) => {
    const { roll, comment } = req.body

    try {
      const result = await getRollDice(roll, comment)
      res.send(result.replace(/\*/g, ''))
    } catch (error) {
      next(ApiError.badRequest(error))
    }
  }
}
