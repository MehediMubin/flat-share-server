/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { ZodError } from "zod";
import UnauthorizedError from "./unauthorizedError";

const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: `${err.errors.map((error) => error.message).join(". ")}`,
      errorDetails: {
        issues: err.errors.map((error) => ({
          field: error.path[1],
          message: error.message,
        })),
      },
    });
  }

  if (err instanceof UnauthorizedError) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Unauthorized Access",
      errorDetails: err,
    });
  }

  if (err instanceof TokenExpiredError) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Unauthorized Access",
      errorDetails: err,
    });
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Unauthorized Access",
      errorDetails: err,
    });
  }

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "Something went wrong!",
    errorDetails: err,
  });
};

export default globalErrorHandler;
