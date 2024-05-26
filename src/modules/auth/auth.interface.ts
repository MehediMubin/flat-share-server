export type TAuth = {
  username: string;
  email: string;
  password: string;
  status?: string;
  role?: "user" | "admin" | "superadmin";
};

export type TLogin = {
  username?: string;
  email?: string;
  password: string;
};
