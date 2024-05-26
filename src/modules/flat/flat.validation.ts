import { z } from "zod";

const addFlat = z.object({
  body: z.object({
    squareFeet: z.number({
      required_error: "Square feet field is required.",
    }),
    totalBedrooms: z.number({
      required_error: "Total bedrooms field is required.",
    }),
    totalRooms: z.number({
      required_error: "Total rooms field is required.",
    }),
    utilitiesDescription: z.string({
      required_error: "Utilities description field is required.",
      invalid_type_error: "Utilities description must be a string.",
    }),
    location: z.string({
      required_error: "Location field is required.",
      invalid_type_error: "Location must be a string.",
    }),
    description: z.string({
      required_error: "Description field is required.",
      invalid_type_error: "Description must be a string.",
    }),
    rent: z.number({
      required_error: "Rent field is required.",
      invalid_type_error: "Rent must be a number.",
    }),
    advanceAmount: z.number({
      required_error: "Advance amount field is required.",
      invalid_type_error: "Advance amount must be a number.",
    }),
  }),
});

const updateFlat = z.object({
  body: z.object({
    squareFeet: z.number().optional(),
    totalBedrooms: z.number().optional(),
    totalRooms: z.number().optional(),
    utilitiesDescription: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    rent: z.number().optional(),
    availability: z.boolean().optional(),
    advanceAmount: z.number().optional(),
  }),
});

export const FlatValidations = {
  addFlat,
  updateFlat,
};
