import { Router } from "express";
import GuestRouters from "../routers/GuestRouter";
import AdminRouters from "../routers/AdminRouter";
import RoomRouters from "../routers/RoomRouter";

const routers = Router();

routers.use("/guest", GuestRouters);
routers.use("/adm", AdminRouters);
routers.use("/room", RoomRouters)

export default routers;
