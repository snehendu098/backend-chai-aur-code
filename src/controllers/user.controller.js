import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  return res.status(200).json({ success: true, message: "Register user" });
});
