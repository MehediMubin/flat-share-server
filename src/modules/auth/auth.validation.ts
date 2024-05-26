import { z } from "zod";

const register = z.object({
  body: z.object({
    username: z.string({
      required_error: "Name field is required.",
    }),
    email: z.string({
      required_error: "Email field is required",
      invalid_type_error: "Email must be a valid email address",
    }),
    password: z.string({
      required_error: "Password field is required",
    }),
  }),
});

const login = z.object({
  body: z.object({
    username: z.string().optional(),
    email: z.string().optional(),
    password: z.string({
      required_error: "Password field is required",
    }),
  }),
});

export const AuthValidations = {
  register,
  login,
};
