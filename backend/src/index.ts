import { Hono } from "hono";
import apiRouter from "./routes";

const app = new Hono();

app.route("/api", apiRouter);

export default app;
