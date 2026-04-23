import app from "./app.js";
import { logger } from "./lib/logger.js";
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";

const port = Number(process.env.PORT || 3000);

const server = createServer(
  app as unknown as (req: IncomingMessage, res: ServerResponse) => void,
);

server.listen(port, () => {
  logger.info({ port }, "Server listening");
});

server.on("error", (err: unknown) => {
  logger.error({ err }, "Error listening on port");
  process.exit(1);
});
