import { Model } from 'mongoose'
import { IAdm } from '../entities/IAdm'

export class AdminRepository {
    private database: Model<IAdm>

    constructor(db: Model<IAdm>){
        this.database = db
    }

    async findByEmail (email: string): Promise<IAdm | null> {
        const adm = await this.database.findOne({email})
        return adm
    }
}