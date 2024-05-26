import { z } from "zod";

const booking = z.object({
  body: z.object({
    flatId: z.string({
      required_error: "Flat ID field is required.",
    }),
  }),
});

export const BookingValidation = {
  booking,
};
