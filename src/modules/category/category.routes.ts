import { validateRequest } from "@/middlewares";
import { Router } from "express";
import categoryController from "./category.controller";
import categoryValidation from "./category.validation";

const categoryRouter: Router = Router();

categoryRouter
  .route("/")
  .get(categoryController.getAll)
  .post(validateRequest(categoryValidation.create), categoryController.create);

categoryRouter
  .route("/:id")
  .delete(categoryController.deleteOne)
  .patch(
    validateRequest(categoryValidation.update),
    categoryController.updateOne,
  );

export default categoryRouter;
