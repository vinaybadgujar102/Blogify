import {
  createBlogInput,
  updateBlogInput,
} from "@vinaybadgujar102/blogify-common";
import { getPrisma } from "../db/prismaClient";
import { CustomContext } from "../types/appContext";

export async function createBlog(c: CustomContext) {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  const userId = c.get("userId");

  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct",
    });
  }

  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(userId),
      },
    });

    return c.json({
      id: blog.id,
    });
  } catch (error) {
    c.status(411);
    console.log(error);

    return c.json({
      message: "Someting went wrong",
    });
  }
}

export async function updateBlog(c: CustomContext) {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct",
    });
  }

  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      id: blog.id,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Someting went wrong",
    });
  }
}

export async function getBlogById(c: CustomContext) {
  const id = c.req.param("id");
  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
    });

    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Someting went wrong",
    });
  }
}

//add pagination later
export async function getAllBlogs(c: CustomContext) {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  try {
    const blog = await prisma.blog.findMany();
    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Someting went wrong",
    });
  }
}
