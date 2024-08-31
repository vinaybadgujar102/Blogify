import { Hono } from "hono";
import apiRouter from "./routes";
import { AppContext } from "./types/appContext";

const app = new Hono<AppContext>();

app.route("/api", apiRouter);

export default app;
