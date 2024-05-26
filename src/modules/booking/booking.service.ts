import { BookingModel } from "./booking.model";

const createBookingRequest = async (flatId: string, userId: string) => {
  const existingBooking = await BookingModel.findOne({
    flatId,
    userId,
  });

  if (existingBooking) {
    throw new Error("You have already booked this flat.");
  }

  const result = await BookingModel.create({
    flatId,
    userId,
  });

  return result;
};

const getAllBookingRequests = async () => {
  const result = await BookingModel.find();
  return result;
};

export const BookingServices = {
  createBookingRequest,
  getAllBookingRequests,
};
