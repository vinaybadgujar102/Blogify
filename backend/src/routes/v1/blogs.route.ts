import { Hono } from "hono";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../../controllers";
import { CustomContext } from "../../types/appContext";
import { decode, verify } from "hono/jwt";

const blogRouter = new Hono();

blogRouter.use("/*", async (c: CustomContext, next) => {
  const authHeader = c.req.header("authorization") || "";
  const user = await verify(authHeader, c.env.JWT_SECRET);
  console.log(user);

  if (user) {
    // @ts-ignore
    c.set("userId", user.id);
    await next();
  } else {
    return c.json({
      message: "you are not logged in",
    });
  }
});

blogRouter.post("/", createBlog);

blogRouter.put("/", updateBlog);

blogRouter.get("/:id", getBlogById);

blogRouter.get("/bulk", getAllBlogs);

export default blogRouter;
