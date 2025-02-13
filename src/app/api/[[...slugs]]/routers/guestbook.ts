import { Elysia } from "elysia";

export const guestbookRouter = new Elysia().group("/guestbook", (app) =>
  app.get("/", () => {
    return "Hello from guestbook router";
  })
);
