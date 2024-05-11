import { AdminModel } from "../models/AdminModel";
import { AdmService } from "../services/AdmService";
import { StatusCode } from "../utils/statusCode";
import { AdminRepository } from "../repositories/AdmRepository";
import { Request, Response } from "express";

const repository = new AdminRepository(AdminModel);
const service = new AdmService(repository);

export async function loggerAdmController(req: Request, res: Response) {
  try {
    const login = await service.logger(req.body);
    res.status(StatusCode.OK).json({ token: login });
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
}
