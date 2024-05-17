import { IBooking } from '../entities/IBookings'

export class BookingService {
  repository:

  constructor(repo: ){
    this.repository = repo
  }

  async createBooking(data: IBooking){}

}
