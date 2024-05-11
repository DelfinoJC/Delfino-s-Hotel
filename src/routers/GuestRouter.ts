import { Router } from "express";
import * as GuestSchema from "../schemes/GuestSchema";
import auth from "../middleware/auth";
import validateRouter from "../middleware/validateMiddleware";
import {
  createGuest,
  findAllGuest,
  loggerGuest,
} from "../controllers/GuestController";

const router = Router();

router.post("/", validateRouter(GuestSchema.CreateGuest.schema), createGuest);
router.post(
  "/login",
  validateRouter(GuestSchema.LoggerGuest.schema),
  loggerGuest
);
router.get("/", findAllGuest);

export default router;
