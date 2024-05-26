/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import config from "../../config";
import { jwtHelpers } from "../../utils/jwtHelpers";
import { TAuth, TLogin } from "./auth.interface";
import { AuthModel } from "./auth.model";

const register = async (payload: TAuth) => {
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

  let user;
  try {
    user = await AuthModel.create(userData);
  } catch (error: any) {
    if (error.code === 11000) {
      const key = Object.keys(error.keyValue)[0];
      const value = error.keyValue[key];
      throw new Error(`The ${key} "${value}" already exists.`);
    }
    throw new Error(error.message);
  }

  const userObject = await AuthModel.findById(user._id).select("-password");

  return userObject;
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
