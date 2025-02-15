import { App } from "@/app/api/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";

export const { api } = treaty<App>(
  process.env.NODE_ENV === "production"
    ? "https://jimslab.cc"
    : "http://localhost:3000"
);
