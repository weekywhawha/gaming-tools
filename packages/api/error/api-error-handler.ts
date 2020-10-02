import { ApiError } from './api-error'

export function errorHandler(err: any, req:any, res:any, next:any) {
  //change to async log for prod
  console.error(err)

  if (err instanceof ApiError) {
    res.status(err.code).json(err.message)
    return
  }

  res.status(500).json('something went wrong')
}
