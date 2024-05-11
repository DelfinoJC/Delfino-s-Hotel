import mongoose from "mongoose";
import { databaseConfig } from "../configs/databaseConfig";

mongoose.connect(databaseConfig.uri);

export { mongoose };
