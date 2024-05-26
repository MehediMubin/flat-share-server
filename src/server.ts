import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const main = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database connected successfully");

    const server: Server = app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to connect to database", error);
  }
};

main();
