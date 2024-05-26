/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import config from "../../config";
import prisma from "../../db/prisma";
import { jwtHelpers } from "../../utils/jwtHelpers";
import { TLogin, TRegistration } from "./auth.constant";

const register = async (payload: TRegistration) => {
  const { username, email, password } = payload;

  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.salt_rounds),
  );

  const userData = {
    username,
    email,
    password: hashedPassword,
  };

  const result = await 

  return result;
};

const login = async (payload: TLogin) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    userData.password,
  );

  if (!isCorrectPassword) {
    throw new Error("Password incorrect!");
  }

  const accessToken = jwtHelpers.generateToken(
    {
      id: userData.id,
      email: userData.email,
    },
    config.jwt.access_token_secret as string,
    config.jwt.access_token_expires_in as string,
  );

  // eslint-disable-next-line no-unused-vars
  const refreshToken = jwtHelpers.generateToken(
    {
      id: userData.id,
      email: userData.email,
    },
    config.jwt.refresh_token_secret as string,
    config.jwt.refresh_token_expires_in as string,
  );

  const result = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    token: accessToken,
  };
  return result;
};

export const AuthServices = {
  register,
  login,
};
