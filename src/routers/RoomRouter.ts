import { Router } from 'express'
import {
  createRoom,
  updateStatus,
  findAllRooms,
  findAllRoomsAvailable
} from '../controllers/RoomController'
import * as RoomSchema from '../schemes/RoomSchema'
import authMiddleware from '../middleware/auth'
import { storageMiddleware } from '../middleware/uploadFiles'
import validateMiddleware from '../middleware/validateMiddleware'

const router = Router()

router.post(
  '/',
  authMiddleware(true),
  storageMiddleware.single('image'),
  validateMiddleware(RoomSchema.CreateRoom.schema),
  createRoom
)

router.put(
  '/:id',
  authMiddleware(true),
  validateMiddleware(RoomSchema.UpdateStatusOfRoom.schema),
  updateStatus
)

router.get('/allRooms', findAllRooms)

router.get('/roomsAvailable', authMiddleware(false) , findAllRoomsAvailable)

export default router
