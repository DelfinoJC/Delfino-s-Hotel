import { Request, Response } from 'express'
import { StatusCode } from '../utils/statusCode'

export async function createBooking(req: Request, res: Response) {
  try {
    const create = await service.createBooking(req.body)
    return res.status(StatusCode.CREATE).json({ create })
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message })
  }
}
