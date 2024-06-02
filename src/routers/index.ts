import { Router } from "express";
import GuestRouters from "./GuestRouter";
import AdminRouters from "./AdminRouter";
import RoomRouters from "./RoomRouter";
import BookingRouters from "./BookingRouter"

const routers = Router();

routers.use("/guest", GuestRouters);
routers.use("/adm", AdminRouters);
routers.use("/room", RoomRouters);
routers.use("/booking", BookingRouters)

export default routers;
