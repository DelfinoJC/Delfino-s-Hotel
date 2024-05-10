import mongoose from "mongoose";
import { IBooking } from "./IBookings";

export interface IGuest {
  _id: mongoose.Types.ObjectId;
  name: string;
  CPF: string;
  phoneNumber: number;
  email: string;
  password: string;
  bookings: Array<IBooking>;
}

export interface IGuestDTO {
  name: string;
  CPF: string;
  phoneNumber: number;
  email: string;
  password: string;
}

export interface IGuestLogin {
  email: string;
  password: string;
}

export interface IGuestTOKEN {
  token: string;
}
