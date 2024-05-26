import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";
import config from "../config";
import { jwtHelpers } from "../utils/jwtHelpers";
import UnauthorizedError, { UnauthorizedReason } from "./unauthorizedError";

const auth = () => {
  return async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: Request & { user?: any },
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new UnauthorizedError(UnauthorizedReason.UNDEFINED_JWT);
      }

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.access_token_secret as Secret,
      );

      req.user = verifiedUser;
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
