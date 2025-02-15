import { App } from "@/app/api/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";

export const { api } = treaty<App>(process.env.AUTH_URL ?? window.location.origin);
