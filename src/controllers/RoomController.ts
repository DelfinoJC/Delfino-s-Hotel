import { RoomModel } from '../models/RoomModel'
import { StatusCode } from '../utils/statusCode'
import { RoomService } from '../services/RoomService'
import { RoomRepository } from '../repositories/RoomRepository'
import { Request, Response } from 'express'

const repository = new RoomRepository(RoomModel)
const service = new RoomService(repository)

export async function createRoom(req: Request, res: Response) {
  const { file, body } = req
  console.log(body)
  try {
    const data = {
      ...body,
      photo: file?.filename,
    }
    const newRoom = await service.createRoom(data)
    return res.status(StatusCode.CREATE).json({ newRoom })
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message })
  }
}

export async function updateStatus(req: Request, res: Response) {
  const { id } = req.params
  const data = req.body

  try {
    const newStatus = await service.updateStatusOfRoom(id, data.status)
    return res.status(StatusCode.OK).json({ newStatus })
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message })
  }
}

export async function findAllRooms(req: Request, res: Response){
  try{
    const allRooms = await service.findAllRooms()
    return res.status(StatusCode.OK).json({ rooms: allRooms})
  }
  catch(error){
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message })
  }
}

export async function findAllRoomsAvailable(req: Request, res: Response) {
  try{
    const allRooms = await service.findAllRoomsAvailable()
    return res.status(StatusCode.OK).json({ rooms: allRooms })
  }
  catch(error){
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message})
  }
}
