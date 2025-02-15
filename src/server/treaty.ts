import { App } from "@/app/api/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";

export const { api } = treaty<App>(
  Bun.env.NODE_ENV === "production"
    ? Bun.env.AUTH_URL!
    : "http://localhost:3000"
);
