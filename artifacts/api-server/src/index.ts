import type { IncomingMessage, ServerResponse } from "node:http";

type JsonBody = Record<string, unknown>;

function sendJson(res: ServerResponse, statusCode: number, body: JsonBody) {
  res.statusCode = statusCode;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url ?? "/", "http://localhost");
  const method = req.method ?? "GET";

  if (method === "GET" && (url.pathname === "/api/healthz" || url.pathname === "/healthz")) {
    sendJson(res, 200, { status: "ok" });
    return;
  }

  sendJson(res, 404, { error: "Not found" });
}
