import { sign } from "hono/jwt";
import { getPrisma } from "../db/prismaClient";
import { CustomContext } from "../types/appContext";

export async function signUp(c: CustomContext) {
  const body = await c.req.json();
  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.text(jwt);
  } catch (error) {
    c.status(411);
    return c.text("user already exists");
  }
}

export async function signIn(c: CustomContext) {
  const body = await c.req.json();
  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.text("Invalid user");
    }
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.text(jwt);
  } catch (error) {
    c.status(411);
    return c.text("user already exists");
  }
}
