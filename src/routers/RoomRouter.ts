import { Router } from 'express'
import validateMiddleware from '../middleware/validateMiddleware'
import authMiddleware from '../middleware/auth'
import * as RoomSchema from '../schemes/RoomSchema'
import { createRoom } from '../controllers/RoomController'

const router = Router()

router.post(
    "/",
    authMiddleware(true),
    validateMiddleware(RoomSchema.CreateRoom.schema),
    createRoom
)

export default router