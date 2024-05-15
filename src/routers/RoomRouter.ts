import { Router } from 'express'
import { createRoom } from '../controllers/RoomController'
import * as RoomSchema from '../schemes/RoomSchema'
import authMiddleware from '../middleware/auth'
import { storageMiddleware } from '../middleware/uploadFiles'
import validateMiddleware from '../middleware/validateMiddleware'

const router = Router()

router.post(
    "/",
    authMiddleware(true),
    storageMiddleware.single("image"),
    validateMiddleware(RoomSchema.CreateRoom.schema),
    createRoom
)

export default router
