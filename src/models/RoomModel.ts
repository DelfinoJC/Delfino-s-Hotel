import mongoose from "mongoose";
import { IRoom } from "../entities/IRoom";

const roomSchema = new mongoose.Schema<IRoom>({
    dailyRate: {
        type: Number,
        required: true
    },

    guestCapacity: {
        type: Number,
        required: true
    },

    numberOfRoom: {
        type: Number,
        unique: true,
        required: true
    },

    photo: {
        type: String,
    },

    status: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },
})

export const RoomModel = mongoose.model("Rooms", roomSchema)