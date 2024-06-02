import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  database_url: process.env.DATABASE_URL,
  super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
  jwt: {
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
  },
};
