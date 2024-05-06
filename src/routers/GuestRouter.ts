import { Router } from 'express'
import * as GuestSchema from '../schemes/GuestSchema'
import validateRouter from '../middleware/validateMiddleware'
import { createGuest, findAllGuest } from '../controllers/GuestController'


const router = Router()

router.post('/', validateRouter(GuestSchema.CreateGuest.schema), createGuest)
router.get('/', findAllGuest)





export default router 