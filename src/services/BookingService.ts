import { IBooking } from '../entities/IBookings'
import { RoomRepository } from '../repositories/RoomRepository'
import { GuestRepository } from '../repositories/GuestRepository'
import { BookingRepository } from '../repositories/BookingRepository'

export class BookingService {
  private repository: BookingRepository
  private guestRepository: GuestRepository
  private roomRepository: RoomRepository

  constructor(
    repo: BookingRepository,
    repoGuest: GuestRepository,
    repoRoom: RoomRepository
  ) {
    ;(this.repository = repo),
      (this.guestRepository = repoGuest),
      (this.roomRepository = repoRoom)
  }

  async createBooking(data: IBooking) {
    const guest = await this.guestRepository.findGuestById(data.idOfGuest)
    if (!guest) {
      throw new Error('Guest not found.')
    }

    const room = await this.roomRepository.findRoomById(data.idOfRoom)
    if (!room || room.status !== 'available') {
      throw new Error(`Room not available.`)
    }

    const newBooking = {
      ...data,
      checkInDate: new Date(data.checkInDate),
      checkoutDate: new Date(data.checkOutDate),
    }

    // VERIFY SE JÁ EXISTED RESERVE NOS DIAS REQUERIDOS NO QUARTO DESEJADO
    const theRoomIsAlreadyBooked = await this.repository.findBooking(
      newBooking.idOfRoom,
      newBooking.checkInDate,
      newBooking.checkoutDate
    )
    if (theRoomIsAlreadyBooked) {
      throw new Error(
        'It is not possible to book this room on these dates. There is already a reservation'
      )
    }

    if (newBooking.checkInDate > newBooking.checkoutDate) {
      throw new Error(
        `It is not possible to book a room with a check-in date greater than the check-out date.`
      )
    }

    if (newBooking.guests > room.guestCapacity) {
      throw new Error(
        `The room capacity is smaller than the number of people you want to register.`
      )
    }

    const reserveCreated = await this.repository.createBooking(newBooking)
    guest.bookings.push(reserveCreated);
    await guest.save();
    return reserveCreated
  }
}
