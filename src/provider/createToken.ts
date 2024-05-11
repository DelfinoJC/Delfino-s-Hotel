import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ITokenProvider } from './interfaces/IToken'

export class Token implements ITokenProvider {
  tokenJWT(id: string, isAdm: boolean ,auth: string) {
    return jwt.sign({ sub: id, isAdm }, auth, {
      expiresIn: 24 * 60 * 60,
    })
  }

  verifyJWT(token: string, secretKey: string) {
    try {
      const decoded = jwt.verify(token, secretKey) as object
      
      return { success: true, payload: decoded }
    } catch (err) {
      return { success: false }
    }
  }
}