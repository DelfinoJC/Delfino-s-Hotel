import { Router } from 'express'
import validateMiddleware from '../middleware/validateMiddleware'
import * as BookingsSchema from '../schemes/BookingsSchema'
import authMiddleware from '../middleware/auth'
import {
  createBooking,
  deleteBooking
} from '../controllers/BookingController'

const router = Router()

router.post(
  '/',
  authMiddleware(false),
  validateMiddleware(BookingsSchema.CreateBooking.schema),
  createBooking
)

router.delete(
  '/:id',
  authMiddleware(false),
  validateMiddleware(BookingsSchema.UpdateStatusOfBooking.schema),
  deleteBooking
)

export default router
