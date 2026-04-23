import app from "./app.js";
import { logger } from "./lib/logger.js";

const port = Number(process.env.PORT || 3000);

const server = app.listen(port, () => {
  logger.info({ port }, "Server listening");
});

server.on("error", (err: unknown) => {
  logger.error({ err }, "Error listening on port");
  process.exit(1);
});
