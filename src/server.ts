import express from 'express'
import { logger } from '../src/middleware/logger'
import router from './routers/index'

const server = express()

server.use(express.json())
server.use(logger)
server.use(router)

export default server