import { Router } from 'express'
import validateMiddleware from '../middleware/validateMiddleware'
import * as BookingsSchema from '../schemes/BookingsSchema'
import authMiddleware from '../middleware/auth'
import { createBooking } from '../controllers/BookingController'

const router = Router()

router.post(
  "/",
  authMiddleware(false),
  validateMiddleware(BookingsSchema.CreateBooking.schema),
  createBooking
)

export default router
