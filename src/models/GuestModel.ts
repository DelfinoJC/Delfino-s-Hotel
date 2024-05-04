import mongoose from "mongoose";
import { IGuest } from "../entities/IGuest";

const guestSchema = new mongoose.Schema<IGuest>({
  name: {
    types: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  CPF: {
    type: Number,
    required: true,
  },

  phoneNumber: {
    type: Number,
  },

  bookings: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Bookings",
    },
  ],
});

export const GuestModel = mongoose.model("Guests", guestSchema)