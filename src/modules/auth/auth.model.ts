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
});

export const AuthModel = model<TAuth>("Auth", authSchema);
