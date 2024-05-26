import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>({
  flatId: {
    type: String,
    required: true,
  },
});

export const BookingModel = model<TBooking>("Booking", bookingSchema);
