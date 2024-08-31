import { Hono } from "hono";

const userRouter = new Hono();

userRouter.get("/signup", (c) => c.text("get user"));
userRouter.post("/signin", (c) => c.text("get user"));

export default userRouter;
