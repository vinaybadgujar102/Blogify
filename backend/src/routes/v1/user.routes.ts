import { Hono } from "hono";
import { AppContext } from "../../types/appContext";
import { getPrisma } from "../../db/prismaClient";

const userRouter = new Hono<AppContext>();

userRouter.post("/signup", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
});
userRouter.post("/signin", (c) => c.text("get user"));

export default userRouter;
