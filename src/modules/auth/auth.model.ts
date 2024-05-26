import { Schema, model } from "mongoose";
import { TAuth } from "./auth.interface";

const authSchema = new Schema<TAuth>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
  role: {
    type: String,
    default: "user",
  },
});

export const AuthModel = model<TAuth>("Auth", authSchema);
