import { RoomModel } from '../models/RoomModel'
import { GuestModel } from '../models/GuestModel'
import { StatusCode } from '../utils/statusCode'
import { BookingModel } from '../models/BookingModel'
import { RoomRepository } from '../repositories/RoomRepository'
import { BookingService } from '../services/BookingService'
import { GuestRepository } from '../repositories/GuestRepository'
import { BookingRepository } from '../repositories/BookingRepository'
import { Request, Response } from 'express'


const guestRepository = new GuestRepository(GuestModel)
const roomRepository = new RoomRepository(RoomModel)
const bookingRepository = new BookingRepository(BookingModel)

const service = new BookingService(bookingRepository, guestRepository, roomRepository)

export async function createBooking(req: Request, res: Response) {
  try {
    const create = await service.createBooking(req.body)
    return res.status(StatusCode.CREATE).json({ create })
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message })
  }
}
