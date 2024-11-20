import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const create = async (payload: IBlog) => {
  payload.slug = Blog.generateSlug(payload.title);
  payload.status = "published";

  return Blog.create({ ...payload });
};

export default {
  create,
};
