import { authAdm } from "../configs/authAdmConfig";
import { Token } from "../provider/createToken";
import { authGuest } from "../configs/authGuestConfig";
import { StatusCode } from "../utils/statusCode";
import { Request, Response, NextFunction } from "express";

const providerToken = new Token();

export default (isAdm: boolean) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    console.log(authHeader);
    if (!authHeader) {
      return res
        .status(StatusCode.NOT_AUTHORIZED)
        .json({ error: "You need a token to access this functionality." });
    }

    const twoPartsToken = authHeader.split(" ");
    if (twoPartsToken.length !== 2) {
      return res
        .status(StatusCode.SEMANTIC_ERRORS)
        .json({ error: "Error of the validate token" });
    }

    const [tokenSchema, token] = twoPartsToken;
    if (tokenSchema !== "Bearer") {
      return res
        .status(StatusCode.SEMANTIC_ERRORS)
        .json({ error: "Error of the validate token" });
    }

    if (isAdm) {
      const checkAdm = providerToken.verifyJWT(token, authAdm.secret);
      if (checkAdm) {
        return next();
      }
      return res
        .status(StatusCode.SEMANTIC_ERRORS)
        .json({ error: "Error of the validate token" });
    }

    const checkIfYouAreGuest = providerToken.verifyJWT(token, authGuest.secret);
    if (checkIfYouAreGuest) {
      return next();
    }

    return res
      .status(StatusCode.SEMANTIC_ERRORS)
      .json({ error: "Error of the validate token" });
  };
