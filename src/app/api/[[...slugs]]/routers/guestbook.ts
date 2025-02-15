import { Elysia, t } from "elysia";

import { db } from "@/server/db";
import { useAuth } from "../middleware/auth";

export const guestbookRouter = new Elysia().group("/guestbook", (app) =>
  app
    .get("/all", async () => {
      return await db.post.findMany({
        select: {
          id: true,
          message: true,
          createdAt: true,
          createdBy: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {createdAt: "desc"}
      });
    })
    .use(useAuth)
    .post(
      "/create",
      async ({ session, body }) => {
        return await db.post.create({
          data: {
            message: body.message,
            createdById: session.user.id,
          },
        });
      },
      {
        body: t.Object({
          message: t.String({
            minLength: 1,
            error: "Message must not be empty.",
          }),
        }),
      }
    )
);
