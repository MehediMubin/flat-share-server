import { FlatModel } from "../flat/flat.model";
import { BookingModel } from "./booking.model";

interface BookingRequestPayload {
  username: string;
  email: string;
}

const createBookingRequest = async (
  flatId: string,
  userId: string,
  payload: BookingRequestPayload,
) => {
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
    ...payload,
  });

  return result;
};

const getAllBookingRequests = async () => {
  const result = await BookingModel.find();
  return result;
};

const getSingleUserBookingRequest = async (userId: string) => {
  const bookingInfo = await BookingModel.find({
    userId,
  });
  if (!bookingInfo) {
    throw new Error("No booking request found for this user.");
  }

  const result = [];
  for (const booking of bookingInfo) {
    const flatInfo = await FlatModel.findById(booking.flatId);
    result.push({
      location: flatInfo?.location,
      requestStatus: booking.requestStatus,
    });
  }
  return result;
};

export const BookingServices = {
  createBookingRequest,
  getAllBookingRequests,
  getSingleUserBookingRequest,
};
