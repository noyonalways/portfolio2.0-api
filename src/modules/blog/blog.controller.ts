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

export default {
  create,
};
