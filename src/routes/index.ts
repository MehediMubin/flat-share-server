import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { bookingRoutes } from "../modules/booking/booking.route";
import { flatRoutes } from "../modules/flat/flat.route";
import { profileRoutes } from "../modules/profile/profile.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: authRoutes,
  },
  {
    path: "/flats",
    route: flatRoutes,
  },
  {
    path: "/",
    route: bookingRoutes,
  },
  {
    path: "/profile",
    route: profileRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
