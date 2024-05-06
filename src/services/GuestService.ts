import { IGuestDTO } from "../entities/IGuest";
import { Crypto } from '../provider/criptografy'
import { GuestRepository } from "../repositories/GuestRepository";

const cripto = new Crypto()

export class GuestService {

    private repository: GuestRepository
    
    constructor(repo: GuestRepository){
        this.repository = repo
    }

    async createGuest(data: IGuestDTO){
        const guestExistWhithEmail = await this.repository.findByEmail(data.email)

        if(guestExistWhithEmail){
            throw new Error(`This email has already been registered`)
        }

        const encryptedPassword = await cripto.cryptoPassword(data.password)

        const newGuest: IGuestDTO = {
            ...data,
            password: encryptedPassword
        }
        
         return await this.repository.create(newGuest)
    }

    async findAllGuest(){
        return await this.repository.findAllGuest()
    }
}