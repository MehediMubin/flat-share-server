import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import seedSuperAdmin from "./DB";

const main = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    seedSuperAdmin();
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
