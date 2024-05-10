import { mongoose } from '../database/connectionDatabase'
import { Model } from 'mongoose'
import { IGuest, IGuestDTO, IGuestLogin } from '../entities/IGuest'

export class GuestRepository {
    private database: Model<IGuest>

    constructor(db: Model<IGuest>){
        this.database = db
    }

    async findByEmail(email: string): Promise<IGuest | null>{
        const guest = await this.database.findOne({email})
        return guest
    }
    
    async findAllGuest(){
        const allUsers = await this.database.find()
        return allUsers
    }

    async create(data: IGuestDTO): Promise<IGuest> {
        const save = await this.database.create(data)
        return save
    }
    
}