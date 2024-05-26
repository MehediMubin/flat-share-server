import catchAsync from "../../utils/catchAsync";
import { BookingServices } from "./booking.service";

const createBookingRequest = catchAsync(async (req, res) => {
  const { flatId } = req.body;
  const result = await BookingServices.createBookingRequest(
    flatId,
    req.user.id,
  );
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Booking requests submitted successfully",
    data: result,
  });
});

const getAllBookingRequests = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingRequests();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Booking requests retrieved successfully",
    data: result,
  });
});


export const bookingControllers = {
  createBookingRequest,
  getAllBookingRequests,
};
