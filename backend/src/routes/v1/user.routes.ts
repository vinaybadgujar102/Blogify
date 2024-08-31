import { Hono } from "hono";
import { AppContext } from "../../types/appContext";
import { signIn, signUp } from "../../controllers/user.controller";

const userRouter = new Hono<AppContext>();

userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);

export default userRouter;
