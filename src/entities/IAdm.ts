import mongoose from "mongoose";

export interface IAdm {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  isAdm: true;
}

export interface IAdmTOKEN {
  token: string
}
