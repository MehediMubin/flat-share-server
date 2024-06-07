import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { flatControllers } from "./flat.controller";
import { FlatValidations } from "./flat.validation";

const router = Router();

router.post(
  "/",
  auth(["admin", "superAdmin", "user"]),
  validateRequest(FlatValidations.addFlat),
  flatControllers.addFlat,
);

router.get("/", flatControllers.getAllFlats);

router.get(
  "/user",
  auth(["admin", "superAdmin", "user"]),
  flatControllers.getSingleUserFlats,
);

router.get("/:flatId", flatControllers.getSingleFlat);

router.put(
  "/:flatId",
  auth(["admin", "superAdmin", "user"]),
  validateRequest(FlatValidations.updateFlat),
  flatControllers.updateFlat,
);

router.delete(
  "/:flatId",
  auth(["admin", "superAdmin", "user"]),
  flatControllers.deleteSingleFlat,
);

export const flatRoutes = router;
