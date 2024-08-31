import { Hono } from "hono";
import { AppContext } from "../../types/appContext";
import { signUp } from "../../controllers/user.controller";

const userRouter = new Hono<AppContext>();

userRouter.post("/signup", signUp);
userRouter.post("/signin", (c) => c.text("get user"));

export default userRouter;
