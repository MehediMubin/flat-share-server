import { Router } from "express";
import auth from "../../middlewares/auth";
import { ProfileController } from "./profile.controller";

const router = Router();

router.get("/", auth(), ProfileController.getProfile);

router.put("/", auth(), ProfileController.updateProfile);

export const profileRoutes = router;
