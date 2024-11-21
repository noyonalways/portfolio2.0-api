import authRouter from "@/modules/auth/auth.routes";
import blogRouter from "@/modules/blog/blog.routes";
import categoryRouter from "@/modules/category/category.routes";
import projectRouter from "@/modules/project/project.routes";
import skillRouter from "@/modules/skill/skill.routes";
import { Router } from "express";

const router: Router = Router();

const moduleRoutes: IModuleRoute[] = [
  {
    path: "/auth",
    routes: authRouter,
  },
  {
    path: "/blogs",
    routes: blogRouter,
  },
  {
    path: "/categories",
    routes: categoryRouter,
  },
  {
    path: "/projects",
    routes: projectRouter,
  },
  {
    path: "/skills",
    routes: skillRouter,
  },
];

moduleRoutes.forEach(({ path, routes }) => {
  router.use(path, routes);
});

interface IModuleRoute {
  path: string;
  routes: Router;
}

export default router;
