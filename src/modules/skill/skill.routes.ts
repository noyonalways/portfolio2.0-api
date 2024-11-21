import { validateRequest } from "@/middlewares";
import { Router } from "express";
import skillController from "./skill.controller";
import skillValidation from "./skill.validation";

const skillRouter: Router = Router();

skillRouter
  .route("/")
  .get(skillController.getAll)
  .post(validateRequest(skillValidation.create), skillController.create);

skillRouter
  .route("/:id")
  .patch(validateRequest(skillValidation.update), skillController.updateOne);

export default skillRouter;
