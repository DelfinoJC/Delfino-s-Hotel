import { Router } from "express";
import GuestRouters from "../routers/GuestRouter";
import AdminRouters from "../routers/AdminRouter";

const routers = Router();

routers.use("/guest", GuestRouters);
routers.use("/adm", AdminRouters);

export default routers;
