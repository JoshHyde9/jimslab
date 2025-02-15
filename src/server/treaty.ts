import { App } from "@/app/api/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";

export const { api } = treaty<App>(
  process.env.NODE_ENV === "production"
    ? process.env.AUTH_URL!
    : "http://localhost:3000"
);
