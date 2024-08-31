import { Context } from "hono";

export type AppContext = {
  Bindings: {
    DATABASE_URL: string;
  };
};

export type CustomContext = Context<AppContext>;
