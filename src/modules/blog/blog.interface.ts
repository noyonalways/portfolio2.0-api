import { Document, Model, Types } from "mongoose";

export type IBlogContentType = "mdx" | "text" | "string";
export type IBlogStatus = "published" | "draft" | "unlisted";
export interface IBlogAuthor {
  name: string;
  email: string;
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  brief: string;
  cover: string;
  contentType: IBlogContentType;
  author: IBlogAuthor;
  status: IBlogStatus;
  views: number;
  likes: number;
  comments: number;
  tags: string[];
  category: Types.ObjectId;
  isDeleted: boolean;
}

export interface IBlogModel extends Model<IBlog> {
  generateSlug(title: string): Promise<string>;
}
