import { validateRequest } from "@/middlewares";
import { Router } from "express";
import projectController from "./project.controller";
import projectValidation from "./project.validation";

const projectRouter: Router = Router();

projectRouter
  .route("/")
  .get(projectController.getAll)
  .post(validateRequest(projectValidation.create), projectController.create);

projectRouter
  .route("/:id")
  .get(projectController.getOne)
  .delete(projectController.deleteOne)
  .patch(
    validateRequest(projectValidation.update),
    projectController.updateOne,
  );

export default projectRouter;
