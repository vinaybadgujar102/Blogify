import { Hono } from "hono";
import apiRouter from "./routes";
import { AppContext } from "./types/appContext";
import { cors } from "hono/cors";

const app = new Hono<AppContext>();
app.use("/*", cors());
app.route("/api", apiRouter);

export default app;
