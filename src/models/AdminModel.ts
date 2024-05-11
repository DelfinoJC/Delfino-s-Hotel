import { IAdm } from "../entities/IAdm";
import { mongoose } from "../database/connectionDatabase";

const admSchema = new mongoose.Schema<IAdm>({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  isAdm: {
    type: Boolean,
    required: true,
  },
});

export const AdminModel = mongoose.model("Admins", admSchema);
