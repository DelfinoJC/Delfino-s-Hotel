import { Model } from 'mongoose'
import { IBooking } from '../entities/IBookings'

export class BookingRepository {
  private database: Model<IBooking>

  constructor(db: Model<IBooking>) {
    this.database = db
  }

  async findBookingById(id: string): Promise<IBooking | null> {
    const booking = await this.database.findById(id)
    return booking
  }

  async findBooking(
    room: string,
    dateEntry: Date,
    departureDate: Date
  ): Promise<IBooking | null> {
    const booking = await this.database
      .findOne(
        { idOfRoom: room },
        { checkInDate: dateEntry },
        { checkOutDate: departureDate }
      )
      .exec()
    return booking
  }

  async findAllBookingsWithIdGuest(id: string): Promise<IBooking[]> {
    const allBookings = await this.database.find({ guests: id }).exec()
    return allBookings
  }

  async changeStatusToCanceled(booking: string) {
    const update = await this.database
      .findOneAndUpdate({ _id: booking }, { status: 'canceled' }, { new: true })
      .exec()
    return update
  }

  async createBooking(data: IBooking) {
    const newBooking = await this.database.create(data)
    return newBooking
  }
}
