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
  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are not logged in",
      });
    }
  } catch (e) {
    c.status(403);
    return c.json({
      message: "You are not logged in",
    });
  }
});
blogRouter.get("/bulk", getAllBlogs);
blogRouter.get("/:id", getBlogById);

blogRouter.post("/", createBlog);

blogRouter.put("/", updateBlog);

export default blogRouter;
