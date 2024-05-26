/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import config from "../../config";
import { jwtHelpers } from "../../utils/jwtHelpers";
import { TLogin, TRegistration } from "./auth.constant";
import { AuthModel } from "./auth.model";

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

  const result = await AuthModel.create(userData);

  return result;
};

const login = async (payload: TLogin) => {
  let userData;

  if (payload.email) {
    userData = await AuthModel.findOne({ email: payload.email });
  } else if (payload.username) {
    userData = await AuthModel.findOne({ username: payload.username });
  }

  if (!userData) {
    throw new Error("User not found!");
  }

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

  const result = {
    id: userData.id,
    username: userData.username,
    email: userData.email,
    token: accessToken,
  };
  return result;
};

export const AuthServices = {
  register,
  login,
};
