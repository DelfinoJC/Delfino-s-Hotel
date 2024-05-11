import mongoose from "mongoose";
import { IBooking } from "../entities/IBookings";

const bookingSchema = new mongoose.Schema<IBooking>({
  checkInDate: {
    type: Date,
    required: true,
  },

  checkoutDate: {
    type: Date,
    required: true,
  },

  gests: {
    type: Number,
    required: true,
  },

  idOfGuest: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Guests",
    },
  ],

  idOfRoom: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Rooms",
    },
  ],

  status: {
    type: String,
    default: "confirmed",
  },
});

export const BookingModel = mongoose.model("Bookings", bookingSchema);
