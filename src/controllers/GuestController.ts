import { Request, Response} from 'express'
import { GuestService } from '../services/GuestService'
import { GuestRepository } from '../repositories/GuestRepository'
import { GuestModel } from '../models/GuestModel'
import { StatusCode } from '../utils/statusCode'

const repository = new GuestRepository(GuestModel)
const service = new GuestService(repository)

export async function createGuest(req: Request, res: Response) {
    try{
        const newGuest = await service.createGuest(req.body)
        res.status(StatusCode.CREATE).json({ newGuest })
    }
    catch(error){
        res.status(StatusCode.BAD_REQUEST).json({ error })
        console.log(error)
    }
}

export async function findAllGuest(req: Request, res: Response){
    try {
        const guests = await service.findAllGuest()
        res.status(StatusCode.OK).json({ guests })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).json({ messege: error.messege })
    }
}