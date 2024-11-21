import { catchAsync, sendResponse } from "@/utils";
import httpStatus from "http-status";
import blogService from "./blog.service";

const create = catchAsync(async (req, res) => {
  const result = await blogService.create(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Blog created successfully",
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  const { data, pagination } = await blogService.getAll(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blogs retrieved successfully",
    data: data,
    meta: pagination,
  });
});

export default {
  create,
  getAll,
};
