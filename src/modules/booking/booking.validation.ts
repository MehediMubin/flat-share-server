import { z } from "zod";

const booking = z.object({
  body: z.object({
    username: z.string().min(3).max(255),
    email: z.string().email(),
  }),
});

export const BookingValidation = {
  booking,
};
