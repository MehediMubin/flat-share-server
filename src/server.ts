/* eslint-disable no-unused-vars */
import { Server } from "http";
import app from "./app";
import config from "./config";

const main = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const server: Server = app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
};

main();
