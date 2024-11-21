import { validateRequest } from "@/middlewares";
import { Router } from "express";
import auth from "./../../middlewares/auth";
import blogController from "./blog.controller";
import blogValidation from "./blog.validation";

const blogRouter: Router = Router();

blogRouter
  .route("/")
  .get(blogController.getAll)
  .post(
    auth("super-admin"),
    validateRequest(blogValidation.create),
    blogController.create,
  );

blogRouter
  .route("/:id")
  .get(blogController.getOne)
  .delete(auth("super-admin"), blogController.deleteOne)
  .patch(
    auth("super-admin"),
    validateRequest(blogValidation.update),
    blogController.updateOne,
  );

export default blogRouter;
