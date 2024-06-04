import { Schema, model } from "mongoose";
import { TFlat } from "./flat.interface";

const flatSchema = new Schema<TFlat>({
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  rent: {
    type: Number,
    required: true,
  },
  numberOfBedrooms: {
    type: Number,
    required: true,
  },
  amenities: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
});

export const FlatModel = model<TFlat>("Flat", flatSchema);
