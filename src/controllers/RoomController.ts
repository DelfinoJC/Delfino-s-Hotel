import { RoomModel } from '../models/RoomModel'
import { StatusCode } from '../utils/statusCode'
import { RoomService } from '../services/RoomService'
import { RoomRepository } from '../repositories/RoomRepository'
import { Request, Response } from 'express'

const repository = new RoomRepository(RoomModel)
const service = new RoomService(repository)

export async function createRoom(req: Request, res: Response) {
  const { file ,body } = req
  console.log(body)
  try {
    const data = {
      ...body,
      photo: file?.filename
    }
    const newRoom = await service.createRoom(data)
    return res.status(StatusCode.CREATE).json({ newRoom })
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message })
  }
}
