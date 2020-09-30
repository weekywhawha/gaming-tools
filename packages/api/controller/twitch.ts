//import { ApiError } from '../error/error'
import { getTwitchInfo } from '@gaming-tools/libraries'

export class Twitch {
  static async info(req: any, res: any, next: any) {
    const id = req.params.id
    console.log(id)
    // if (!id) {
    //   next(ApiError.badRequest('id is required'))
    //   return
    // }
    try{
      res.send(await getTwitchInfo(id))
    }
    catch(error){
      console.log(error)
    }
  }
}
