import { Router } from 'express'
import validateMiddleware from '../middleware/validateMiddleware'
import * as BookingsSchema from '../schemes/BookingsSchema'
import authMiddleware from '../middleware/auth'
import {
  createBooking,
  deleteBooking,
  findAllBookingsOfGuest,
} from '../controllers/BookingController'

const router = Router()

router.post(
  '/',
  authMiddleware(false),
  validateMiddleware(BookingsSchema.CreateBooking.schema),
  createBooking
)

router.get(
  '/:id',
  authMiddleware(false),
  validateMiddleware(BookingsSchema.UpdateStatusOfBooking.schema),
  findAllBookingsOfGuest
)

router.delete(
  '/:id',
  authMiddleware(false),
  validateMiddleware(BookingsSchema.UpdateStatusOfBooking.schema),
  deleteBooking
)

export default router
