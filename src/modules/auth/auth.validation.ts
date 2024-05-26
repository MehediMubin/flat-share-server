import { z } from "zod";

const register = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name field is required.",
    }),
    email: z.string({
      required_error: "Email field is required",
      invalid_type_error: "Email must be a valid email address",
    }),
    password: z.string({
      required_error: "Password field is required",
    }),
    bio: z.string({
      required_error: "Bio field is required",
    }),
    profession: z.string({
      required_error: "Profession field is required",
    }),
    address: z.string({
      required_error: "Address field is required",
    }),
  }),
});

const login = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email field is required",
      invalid_type_error: "Email must be a valid email address",
    }),
    password: z.string({
      required_error: "Password field is required",
    }),
  }),
});

export const AuthValidations = {
  register,
  login,
};
