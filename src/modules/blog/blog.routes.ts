import { validateRequest } from "@/middlewares";
import { Router } from "express";
import blogController from "./blog.controller";
import blogValidation from "./blog.validation";

const blogRouter: Router = Router();

blogRouter
  .route("/")
  .get(blogController.getAll)
  .post(validateRequest(blogValidation.create), blogController.create);

blogRouter
  .route("/:id")
  .delete(blogController.deleteOne)
  .patch(validateRequest(blogValidation.update), blogController.updateOne);

export default blogRouter;
