import { IRoom } from '../entities/IRoom'
import { RoomRepository } from '../repositories/RoomRepository'

export class RoomService {
  private repository: RoomRepository

  constructor(repo: RoomRepository) {
    this.repository = repo
  }

  async createRoom(data: IRoom) {
    const room = await this.repository.findRoom(data.numberOfRoom)
    if (room) {
      throw new Error('This room already exists')
    }

    const create = await this.repository.create(data)
    return create
  }

  async updateStatusOfRoom(room: string, newStatus: string) {
    const changedStatus = await this.repository.updateStatus(room, newStatus)
    if (!changedStatus) {
      throw new Error(`This room doesn't exist`)
    }

    return changedStatus
  }

  async findAllRooms(){
    return this.repository.findAllRooms()
  }

  async findAllRoomsAvailable(){
    const allRooms = await this.repository.findAllRooms()

    const availableRooms = allRooms.map((room) => {
      if(room.status === "available"){
        return room
      }
    })

    return availableRooms
  }
}
