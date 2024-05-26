import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { flatControllers } from "./flat.controller";
import { FlatValidations } from "./flat.validation";

const router = Router();

router.post(
  "/",
  auth(),
  validateRequest(FlatValidations.addFlat),
  flatControllers.addFlat,
);

router.get("/", flatControllers.getAllFlats);

router.put(
  "/:flatId",
  auth(),
  validateRequest(FlatValidations.updateFlat),
  flatControllers.updateFlat,
);

export const flatRoutes = router;
