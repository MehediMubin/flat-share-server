import { AuthModel } from "../auth/auth.model";

const getProfile = async (userId: string) => {
  const user = await AuthModel.findById(userId).select("-password");
  return user;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateProfile = async (userId: string, data: any) => {
  const user = await AuthModel.findById(userId);

  if (!user) {
    return null;
  }

  const updatedUser = await AuthModel.findByIdAndUpdate(userId, data, {
    new: true,
  }).select("-password");
  return updatedUser;
};

export const ProfileServices = {
  getProfile,
  updateProfile,
};
