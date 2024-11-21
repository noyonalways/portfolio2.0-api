import { validateRequest } from "@/middlewares";
import { Router } from "express";
import experienceController from "./experience.controller";
import experienceValidation from "./experience.validation";

const experienceRouter: Router = Router();

experienceRouter
  .route("/")
  .get(experienceController.getAll)
  .post(
    validateRequest(experienceValidation.create),
    experienceController.create,
  );

experienceRouter
  .route("/:id")
  .patch(
    validateRequest(experienceValidation.update),
    experienceController.updateOne,
  );

export default experienceRouter;
