import { hash, compare } from 'bcrypt'
import 'dotenv/config'
import { ICryptoProvider } from './interfaces/ICrypto'

export class Crypto implements ICryptoProvider {

  async cryptoPassword(password: string) {
    return await hash(password, (Number(process.env.SALT_RANDOMS)))
  }

  async comperePassword(password: string, userPassword: string) {
    return await compare(password, userPassword)
  }
  
}