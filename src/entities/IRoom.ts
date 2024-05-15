import mongoose from "mongoose"

export interface IRoom {
    _id: mongoose.Types.ObjectId
    numberOfRoom: number,
    type: "queen" | "king" | "twin" | "deluxe" | "executive" | "presidential",
    guestCapacity: number,
    dailyRate: number,
    photo: string,
    status: "available" | "busy" | "under maintenance"
}
