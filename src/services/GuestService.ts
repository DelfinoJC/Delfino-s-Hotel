import { IGuest, IGuestDTO, IGuestLogin, IGuestTOKEN } from "../entities/IGuest";
import { Crypto } from "../provider/cryptograph";
import { authGuest } from '../configs/authGuestConfig'
import { Token } from '../provider/createToken'
import { GuestRepository } from "../repositories/GuestRepository";

const crypto = new Crypto();
const token = new Token()

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

  async logger(data: IGuestLogin): Promise<IGuestTOKEN>{
    const { email, password } = data

    const guest = await this.repository.findByEmail( email )
    if(!guest){
      throw new Error(`Incorrect password or email`)
    }

    const comparesWhetherPasswordsAreTheSame = await crypto.comperePassword(password, guest.password)
    if (!comparesWhetherPasswordsAreTheSame) {
      throw new Error(`Incorrect password or email`)
    }

    const tokenCreated = token.tokenJWT(guest._id.toString(), false, authGuest.secret)

    return { token: tokenCreated }
  }

  async findAllGuest() {
    return await this.repository.findAllGuest();
  }
}