import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { auth } from '../configs/authConfig'
import { ITokenProvider } from './interfaces/IToken'

export class Token implements ITokenProvider {
  tokenJWT(id: string) {
    return jwt.sign({ sub: id }, auth.secret, {
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