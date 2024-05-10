import { Router } from 'express'
import validateRouter from '../middleware/validateMiddleware'
import * as AdmSchema from '../schemes/AdminSchema'

const router = Router()

router.post('/auth')

export default router