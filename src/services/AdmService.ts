import { IAdm, IAdmTOKEN } from "../entities/IAdm";
import { Token } from "../provider/createToken";
import { Crypto } from "../provider/cryptograph";
import { authAdm } from "../configs/authAdmConfig";
import { AdminRepository } from "../repositories/AdmRepository";

const crypto = new Crypto();
const token = new Token();

export class AdmService {
  private repository: AdminRepository;

  constructor(repo: AdminRepository) {
    this.repository = repo;
  }

  async logger(data: IAdm): Promise<IAdmTOKEN> {
    const { email, password } = data;

    const adm = await this.repository.findByEmail(email);
    if (!adm) {
      throw new Error(`Incorrect password or email`);
    }

    const checkWhetherThePasswordIsCorrect = await crypto.comperePassword(
      password,
      adm.password
    );
    if (!checkWhetherThePasswordIsCorrect) {
      throw new Error(`Incorrect password or email`);
    }

    const tokenCreate = token.tokenJWT(
      adm._id.toString(),
      true,
      authAdm.secret
    );

    return { token: tokenCreate };
  }
}
