import { Router } from "express";
import auth from "../../middlewares/auth";
import { ProfileController } from "./profile.controller";

const router = Router();

router.get(
  "/",
  auth(["admin", "superAdmin", "user"]),
  ProfileController.getProfile,
);

router.get(
  "/all",
  auth(["superAdmin", "admin"]),
  ProfileController.getAllProfiles,
);

router.put(
  "/",
  auth(["admin", "superAdmin", "user"]),
  ProfileController.updateProfile,
);

router.put(
  "/:id",
  auth(["superAdmin", "admin"]),
  ProfileController.updateUserStatusAndRole,
);

export const profileRoutes = router;
