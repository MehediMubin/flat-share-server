import { Router } from "express";
import auth from "../../middlewares/auth";
import { ProfileController } from "./profile.controller";

const router = Router();

router.get("/", auth(), ProfileController.getProfile);

router.get("/all", auth(), ProfileController.getAllProfiles);

router.put("/", auth(), ProfileController.updateProfile);

router.put("/:id", auth(), ProfileController.updateUserStatusAndRole);

export const profileRoutes = router;
