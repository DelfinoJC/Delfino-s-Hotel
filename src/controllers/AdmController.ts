import { AdminModel } from '../models/AdminModel'
import { AdmService } from '../services/AdmService'
import { AdminRepository } from '../repositories/AdmRepository'
import { Request, Response } from 'express'

const repository = new AdminRepository(AdminModel)
const service = new AdmService(repository)

export async function loggerAdmController(req: Request, res: Response){
    try{
        const login = await service.logger(req.body)
        return login
    }
    catch(error){}
}