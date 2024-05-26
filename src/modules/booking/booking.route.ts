import { Router } from "express";
import auth from "../../middlewares/auth";
import { bookingControllers } from "./booking.controller";

const router = Router();

router.post(
  "/booking-applications",
  auth(),
  bookingControllers.createBookingRequest,
);

router.get(
  "/booking-requests",
  auth(),
  bookingControllers.getAllBookingRequests,
);

export const bookingRoutes = router;
