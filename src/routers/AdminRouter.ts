import { Router } from "express";
import validateRouter from "../middleware/validateMiddleware";
import * as AdmSchema from "../schemes/AdminSchema";
import { loggerAdmController } from "../controllers/AdmController";

const router = Router();

router.post(
  "/auth",
  validateRouter(AdmSchema.AdmLogger.schema),
  loggerAdmController
);

export default router;
