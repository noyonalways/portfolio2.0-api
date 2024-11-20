import { Router } from "express";
import blogController from "./blog.controller";

const blogRouter: Router = Router();

blogRouter.route("/").post(blogController.create);

export default blogRouter;
