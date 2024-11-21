import QueryBuilder from "@/builder";
import { AppError } from "@/errors";
import httpStatus from "http-status";
import { BLOG_STATUS, SearchableFields } from "./blog.constant";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const create = async (payload: IBlog) => {
  payload.slug = await Blog.generateSlug(payload.title);
  payload.status = "published";

  return Blog.create({ ...payload });
};

const getAll = async (query: Record<string, unknown>) => {
  const queryBuilder = new QueryBuilder(Blog.find(), query, "/blogs");

  const result = await queryBuilder
    .filter() // Apply filter based on query
    .search(SearchableFields) // Search in specified fields
    .sort() // Apply sorting
    .selectFields() // Select specified fields
    .populateFields(["category"]) // Dynamically populate fields
    .paginate() // Apply pagination
    .execute(); // Execute the query and get results

  return result;
};

const updateOne = async (id: string, payload: IBlog) => {
  // Extract tags from the payload
  const { tags, ...restOfPayload } = payload;

  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    {
      ...restOfPayload,
      ...(tags && {
        $addToSet: { tags: { $each: tags } },
      }),
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedBlog) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }

  return updatedBlog;
};

const deleteOne = async (id: string) => {
  const blog = await Blog.findByIdAndUpdate(
    id,
    { isDeleted: true, status: BLOG_STATUS.DELETED },
    { new: true, runValidators: true },
  );
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }
  return blog;
};

export default {
  create,
  getAll,
  updateOne,
  deleteOne,
};
