export type TBooking = {
  flatId: string;
  userId: string;
  username: string;
  email: string;
  requestStatus: "pending" | "approved" | "rejected";
};
