import mongoose from 'mongoose'

export interface IBooking {
  _id: mongoose.Types.ObjectId
  checkInDate: Date
  checkOutDate: Date
  createdAt: Date
  guests: number
  idOfRoom: string
  idOfGuest: string
  status: 'confirmed' | 'canceled' | 'in progress' | 'completed'
}
