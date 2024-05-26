import { mongoose } from '../database/connectionDatabase'
import { Model } from 'mongoose'
import { IBooking } from '../entities/IBookings'
import { BookingModel } from '../models/BookingModel'
import { BookingRepository } from '../repositories/BookingRepository'
import { IGuest, IGuestDTO, IGuestWithBookings } from '../entities/IGuest'

export class GuestRepository {
  private database: Model<IGuest>

  constructor(db: Model<IGuest>) {
    this.database = db
  }

  async findByEmail(email: string): Promise<IGuest | null> {
    const guest = await this.database.findOne({ email })
    return guest
  }

  async findGuestById(id: string) {
    const guest = await this.database.findById(id)
    return guest
  }

  async findAllBookingsWithIdGuest(id: string) {
    const bookingsRepository = new BookingRepository(BookingModel)

    const guestWithBookings = await bookingsRepository.findBookingsOfTheGuest(
      id
    )
    return guestWithBookings
  }

  async findAllGuest() {
    const allUsers = await this.database.find()
    return allUsers
  }

  async create(data: IGuestDTO): Promise<IGuest> {
    const save = await this.database.create(data)
    return save
  }
}
