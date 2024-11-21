import QueryBuilder from "@/builder";
import { SearchableFields } from "./blog.constant";
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

export default {
  create,
  getAll,
};
