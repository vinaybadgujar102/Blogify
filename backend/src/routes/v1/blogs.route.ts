import { Hono } from "hono";

const blogRouter = new Hono();

blogRouter.post("/", (c) => c.text("hi"));

blogRouter.put("/", (c) => c.text("hi"));

blogRouter.get("/:id", (c) => c.text("hi"));

blogRouter.get("/bulk", (c) => c.text("hi"));

export default blogRouter;
