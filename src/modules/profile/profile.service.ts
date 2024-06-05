/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from "bcrypt";
import config from "../../config";
import { AuthModel } from "../auth/auth.model";

const getProfile = async (userId: string) => {
  const user = await AuthModel.findById(userId).select("-password");
  return user;
};

const getAllProfiles = async () => {
  const users = await AuthModel.find().select("-password");
  return users;
};

const updateUserStatusAndRole = async (userId: string, data: any) => {
  try {
    const { role, status } = data;
    const user = AuthModel.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const updateData: any = {};
    if (role) updateData.role = role;
    if (status) updateData.status = status;

    const updatedUser = await AuthModel.findOneAndUpdate(
      {
        _id: userId,
      },
      updateData,
      { new: true, runValidators: true, context: "query" },
    ).select("-password");
    return updatedUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateProfile = async (userId: string, data: any) => {
  try {
    const { username, email, currentPassword, newPassword } = data;

    const user = await AuthModel.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    if (currentPassword) {
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        throw new Error("Current password is incorrect");
      }
      data.password = await bcrypt.hash(
        newPassword,
        Number(config.salt_rounds),
      );
    }

    const updateData: any = {};
    if (username) updateData.username = username;
    if (email) updateData.email = email;
    if (data.password) updateData.password = data.password;

    const updatedUser = await AuthModel.findOneAndUpdate(
      {
        _id: userId,
        $or: [{ username: { $ne: username } }, { email: { $ne: email } }],
      },
      updateData,
      { new: true, runValidators: true, context: "query" },
    ).select("-password");

    if (!updatedUser) {
      throw new Error("Username or Email already exists");
    }

    return updatedUser;
  } catch (error: any) {
    if (error.code === 11000) {
      const key = Object.keys(error.keyValue)[0];
      const value = error.keyValue[key];
      throw new Error(`The ${key} "${value}" already exists.`);
    }
    throw new Error(error.message);
  }
};

export const ProfileServices = {
  getProfile,
  getAllProfiles,
  updateUserStatusAndRole,
  updateProfile,
};
