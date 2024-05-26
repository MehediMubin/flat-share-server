import prisma from "../../db/prisma";

const createBookingRequest = async (flatId: string, userId: string) => {
  const existingBooking = await prisma.booking.findFirst({
    where: {
      flatId,
      userId,
    },
  });

  if (existingBooking) {
    throw new Error("You have already booked this flat.");
  }

  const result = await prisma.booking.create({
    data: {
      flatId,
      userId,
    },
  });

  return result;
};

const getAllBookingRequests = async () => {
  const result = await prisma.booking.findMany();
  return result;
};

const updateBookingRequest = async (bookingId: string, status: string) => {
  const result = await prisma.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      status,
    },
  });
  return result;
};

export const BookingServices = {
  createBookingRequest,
  getAllBookingRequests,
  updateBookingRequest,
};
