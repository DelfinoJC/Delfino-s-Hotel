import { Router } from 'express'
import GuestRouters from '../routers/GuestRouter'

const routers = Router()

routers.use('/guest', GuestRouters)

export default routers