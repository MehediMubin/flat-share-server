import catchAsync from "../../utils/catchAsync";
import { ProfileServices } from "./profile.service";

const getProfile = catchAsync(async (req, res) => {
  const { id } = req.user;
  const result = await ProfileServices.getProfile(id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User profile retrieved successfully",
    data: result,
  });
});

const getAllProfiles = catchAsync(async (req, res) => {
  const result = await ProfileServices.getAllProfiles();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "All user profiles retrieved successfully",
    data: result,
  });
});

const updateProfile = catchAsync(async (req, res) => {
  const { id } = req.user;
  const result = await ProfileServices.updateProfile(id, req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User profile updated successfully",
    data: result,
  });
});

const updateUserStatusAndRole = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProfileServices.updateUserStatusAndRole(id, req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User status and role updated successfully",
    data: result,
  });
});

export const ProfileController = {
  getProfile,
  getAllProfiles,
  updateProfile,
  updateUserStatusAndRole,
};
