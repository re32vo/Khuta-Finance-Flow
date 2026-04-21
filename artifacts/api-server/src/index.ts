import http from "http";
import app from "./app.js";
import { logger } from "./lib/logger.js";

const port = Number(process.env.PORT || 3000);

// إنشاء خادم HTTP أساسي وتمرير تطبيق Express إليه
const server = http.createServer(app);

// اصطياد الأخطاء (مثل تعطل المنفذ) بالطريقة الصحيحة والآمنة
server.on("error", (err: any) => {
  logger.error({ err }, "Error listening on port");
  process.exit(1);
});

// تشغيل الخادم
server.listen(port, () => {
  logger.info({ port }, "Server listening");
});