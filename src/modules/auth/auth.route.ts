import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthControllers } from "./auth.controller";
import { AuthValidations } from "./auth.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(AuthValidations.register),
  AuthControllers.register,
);

router.post(
  "/login",
  validateRequest(AuthValidations.login),
  AuthControllers.login,
);

export const authRoutes = router;
