import { Router } from "express";
import auth from "../../middlewares/auth";
import { bookingControllers } from "./booking.controller";

const router = Router();

router.post(
  "/booking-applications",
  auth(["user"]),
  bookingControllers.createBookingRequest,
);

router.get(
  "/booking-requests",
  auth(["user", "admin", "superAdmin"]),
  bookingControllers.getAllBookingRequests,
);

router.get(
  "/booking-requests/user",
  auth(["user", "admin", "superAdmin"]),
  bookingControllers.getSingleUserBookingRequest,
);

export const bookingRoutes = router;
