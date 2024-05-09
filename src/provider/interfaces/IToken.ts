export interface ITokenProvider {
    tokenJWT: (id: string, youAre: boolean ,auth: string) => string
  
    verifyJWT: (
      token: string,
      secretKey: string
    ) => { success: boolean; payload?: object }
  }