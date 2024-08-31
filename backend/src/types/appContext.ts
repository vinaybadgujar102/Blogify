import { Context } from "hono";

export type AppContext = {
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variable: {
    userId: string;
  };
};

export type CustomContext = Context<AppContext>;
