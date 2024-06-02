import mongoose from "mongoose"

export interface IRoom {
    _id: mongoose.Types.ObjectId
    numberOfRoom: number,
    type: "individual" | "double" | "suite",
    guestCapacity: number,
    dailyRate: number,
    photo: string,
    status: "available" | "busy" | "under maintenance"
}
