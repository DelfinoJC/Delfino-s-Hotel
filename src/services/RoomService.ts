import 'multer'
import { IRoom } from "../entities/IRoom";
import { RoomRepository } from "../repositories/RoomRepository";

export class RoomService {
  private repository: RoomRepository;

  constructor(repo: RoomRepository) {
    this.repository = repo;
  }

  async createRoom(data: IRoom) {
    const room = await this.repository.findRoom(data.numberOfRoom);
    if (room) {
      throw new Error("This room already exists");
    }

    

    const create = await this.repository.create(data);
    return create;
  }
}
