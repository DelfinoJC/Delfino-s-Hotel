import { IGuest } from "../entities/IGuest";
import { mongoose } from "../database/connectionDatabase";

const guestSchema = new mongoose.Schema<IGuest>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  CPF: {
    type: String,
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

export const GuestModel = mongoose.model("Guests", guestSchema);
