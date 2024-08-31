import { Hono } from "hono";
import userRouter from "./user.routes";
import blogRouter from "./blogs.route";

const v1Router = new Hono();

v1Router.route("/user", userRouter);

v1Router.route("/blog", blogRouter);

export default v1Router;
