import prisma from "../../db/prisma";

const getProfile = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      name: true,
      email: true,
      profile: true,
    },
  });

  return user;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateProfile = async (userId: string, data: any) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      profile: true,
    },
  });

  if (!user) {
    return null;
  }
  const result = await prisma.userProfile.update({
    where: {
      id: user.profile!.id,
    },
    data,
  });
  return result;
};

export const ProfileServices = {
  getProfile,
  updateProfile,
};
