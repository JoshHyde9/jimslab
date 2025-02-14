import { Elysia } from "elysia";

import { db } from "@/server/db";
import { useAuth } from "../middleware/auth";

export const guestbookRouter = new Elysia().group("/guestbook", (app) =>
  app
    .get("/", () => {
      return "Hello from guestbook router";
    })
    .use(useAuth)
    .post("/yeet", async ({ session }) => {
      return await db.post.create({
        data: {
          name: "cum",
          createdById: session.user.id,
        },
      });
    })
);
