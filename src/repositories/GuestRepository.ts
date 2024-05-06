import { mongoose } from '../database/connectionDatabase'
import { Model } from 'mongoose'
import { IGuest, IGuestDTO, IGuestLogin } from '../entities/IGuest'

export class GuestRepository {
    private database: Model<IGuest>

    constructor(db: Model<IGuest>){
        this.database = db
    }

    async findByEmail(email: string){
        const guest = await this.database.findOne({email})
        return guest
    }

    async create(data: IGuestDTO): Promise<IGuest> {
        const save = await this.database.create(data)
        return save
    }

    async findAllGuest(){
        const allUsers = await this.database.find()
        return allUsers
    }
}