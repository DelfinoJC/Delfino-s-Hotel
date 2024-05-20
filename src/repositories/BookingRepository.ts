import { Model } from 'mongoose'
import { IBooking } from '../entities/IBookings'

export class BookingRepository {
  private database: Model<IBooking>

  constructor(db: Model<IBooking>) {
    this.database = db
  }

  async findBooking(room: string, dateEntry: Date, departureDate: Date) {
    const booking = await this.database
      .findOne({ idOfRoom: room }, { checkInDate: dateEntry }, { checkOutDate: departureDate })
      .exec()
    return booking
  }

  async createBooking(data: IBooking) {
    const newBooking = await this.database.create(data)
    return newBooking
  }
}
