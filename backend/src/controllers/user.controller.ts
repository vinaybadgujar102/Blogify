import { getPrisma } from "../db/prismaClient";
import { CustomContext } from "../types/appContext";

export async function signUp(c: CustomContext) {
  const body = await c.req.json();
  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });
    return c.text("Signed up");
  } catch (error) {
    c.status(411);
    return c.text("user already exists");
  }
}
