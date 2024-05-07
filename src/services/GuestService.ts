import { IGuest, IGuestDTO } from "../entities/IGuest";
import { Crypto } from "../provider/cryptograph";
import { GuestRepository } from "../repositories/GuestRepository";

const crypto = new Crypto();

export class GuestService {
  private repository: GuestRepository;

  constructor(repo: GuestRepository) {
    this.repository = repo;
  }

  async createGuest(data: IGuestDTO) {
    const guestExistWithEmail = await this.repository.findByEmail(data.email);

    if (guestExistWithEmail) {
      throw new Error(`This email has already been registered`);
    }

    const encryptedPassword = await crypto.cryptoPassword(data.password);

    const newGuest: IGuestDTO = {
      ...data,
      password: encryptedPassword,
    };

    return await this.repository.create(newGuest);
  }

  async findAllGuest() {
    return await this.repository.findAllGuest();
  }
}
