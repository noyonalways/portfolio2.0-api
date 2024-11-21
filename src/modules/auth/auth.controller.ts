import { catchAsync, sendResponse } from "@/utils";
import authService from "./auth.service";

const login = catchAsync(async (req, res) => {
  const result = await authService.login(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Logged in successfully",
    data: result,
  });
});

const register = catchAsync(async (req, res) => {
  const result = await authService.register();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Register successfully",
    data: result,
  });
});

export default {
  login,
  register,
};
