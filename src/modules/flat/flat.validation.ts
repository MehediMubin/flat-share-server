import { z } from "zod";

const addFlat = z.object({
  body: z.object({
    location: z.string({
      required_error: "Location field is required.",
      invalid_type_error: "Location must be a string.",
    }),
    description: z.string({
      invalid_type_error: "Description must be a string.",
    }),
    rent: z.number({
      required_error: "Rent field is required.",
      invalid_type_error: "Rent must be a number.",
    }),
    numberOfBedrooms: z.number({
      required_error: "Number of bedrooms field is required.",
      invalid_type_error: "Number of bedrooms must be a number.",
    }),
    amenities: z.string({
      invalid_type_error: "Amenities must be a string.",
    }),
    photoUrl: z.array(
      z.string({
        invalid_type_error: "Photo URL must be an array of strings.",
      }),
    ),
  }),
});

const updateFlat = z.object({
  body: z.object({
    location: z.string().optional(),
    description: z.string().optional(),
    rent: z.number().optional(),
    numberOfBedrooms: z.number().optional(),
    amenities: z.string().optional(),
    photoUrl: z.array(z.string()).optional(),
  }),
});

export const FlatValidations = {
  addFlat,
  updateFlat,
};
