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

const service = new BookingService(
  bookingRepository,
  guestRepository,
  roomRepository
)

export async function createBooking(req: Request, res: Response) {
  try {
    const create = await service.createBooking(req.body)
    return res.status(StatusCode.CREATE).json({ create })
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message })
  }
}

export async function findAllBookingsOfGuest(req: Request, res: Response) {
  const { id } = req.params

  try {
    const allBookingsOfTheGuest = await service.findAllBookingsOfGuest(id)
    return res.status(StatusCode.OK).json({ allBookingsOfTheGuest })
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message })
  }
}

export async function deleteBooking(req: Request, res: Response) {
  const { id } = req.params

  try {
    const statusDelete = await service.cancelReservation(id)
    return res.status(StatusCode.OK).json({
      message: `What a shame you canceled your reservation. We were looking forward to welcoming you`,
    })
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: error.message })
  }
}
