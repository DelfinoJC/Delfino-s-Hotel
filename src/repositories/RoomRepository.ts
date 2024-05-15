import { IRoom } from '../entities/IRoom'
import { Model } from 'mongoose'

export class RoomRepository {
  private database: Model<IRoom>

  constructor(db: Model<IRoom>) {
    this.database = db
  }

  async findRoom(data: number) {
    const findRoomExist = await this.database.findOne({ data })
    return findRoomExist
  }

  async create(data: IRoom): Promise<IRoom> {
    const createRoom = await this.database.create(data)
    return createRoom
  }
}
