import { IBlogContentType, IBlogStatus } from "./blog.interface";

export const BlogStatus: IBlogStatus[] = [
  "draft",
  "published",
  "unlisted",
  "deleted",
];
export const BlogContentType: IBlogContentType[] = ["mdx", "text", "string"];
export const SearchableFields = ["title", "brief", "content"];
export const DefaultFields = ["title", "brief", "slug", "cover"];

export const BLOG_STATUS = {
  PUBLISHED: "published",
  DRAFT: "draft",
  UNLISTED: "unlisted",
  DELETED: "deleted",
} as const;
