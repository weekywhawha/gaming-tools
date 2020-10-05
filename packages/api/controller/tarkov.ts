import { ApiError } from '../error/api-error'
import { runTarkovCommand } from '@gaming-tools/libraries'
import { Info } from 'api/types/info'

export class Tarkov {
  static map: Info = async (req, res, next) => {
    const { map } = req.body

    if (!map) {
      return next(ApiError.badRequest('invalid parameter'))
    }

    try {
      res.send(await runTarkovCommand(map))
    } catch (error) {
      next(ApiError.badRequest(error))
    }
  }
  static market: Info = async (req, res, next) => {
    const { market, input } = req.body

    if (!market) {
      return next(ApiError.badRequest('invalid parameter'))
    }

    try {
      res.send(await runTarkovCommand(market, input))
    } catch (error) {
      next(ApiError.badRequest(error))
    }
  }
  static ammo: Info = async (req,res,next) => {
    const ammo  = req.params.id

    if (!ammo) {
      return next(ApiError.badRequest('invalid parameter'))
    }

    try {
      res.send(await runTarkovCommand(ammo))
    } catch (error) {
      next(ApiError.badRequest(error))
    }
  }
}






// if (query === 'search' && input === undefined) {
//     return next(ApiError.badRequest('please provide a search input'))
//   }