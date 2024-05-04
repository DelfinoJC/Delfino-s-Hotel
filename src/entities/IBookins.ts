import mongoose from "mongoose";

export interface IBooking {
  checkinDate: Date;
  checkoutDate: Date;
  gests: number;
  idOfRoom: mongoose.Types.ObjectId;
  idOfGuest: mongoose.Types.ObjectId;
  status: "confirmed" | "canceled" | "in progress" | "completed";
}
