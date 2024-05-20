import mongoose from "mongoose";

export interface IBooking {
  checkInDate: Date;
  checkOutDate: Date;
  createdAt: Date;
  guests: number;
  idOfRoom: string;
  idOfGuest: string;
  status: "confirmed" | "canceled" | "in progress" | "completed";
}
