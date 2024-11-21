import { IBlogContentType, IBlogStatus } from "./blog.interface";

export const BlogStatus: IBlogStatus[] = ["draft", "published", "unlisted"];
export const BlogContentType: IBlogContentType[] = ["mdx", "text", "string"];
export const SearchableFields = ["title", "brief", "content"];
