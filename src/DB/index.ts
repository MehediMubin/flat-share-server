import bcrypt from "bcrypt";
import config from "../config";
import { AuthModel } from "../modules/auth/auth.model";

const superAdminInfo = {
  username: "mehedi",
  email: "mehedi.cseulab201@gmail.com",
  password: config.super_admin_password,
  role: "superAdmin",
};

const seedSuperAdmin = async () => {
  const user = await AuthModel.findOne({ role: "superAdmin" });
  if (!user) {
    superAdminInfo.password = await bcrypt.hash(
      superAdminInfo.password!,
      Number(config.salt_rounds),
    );
    await AuthModel.create(superAdminInfo);
  }
};

export default seedSuperAdmin;
