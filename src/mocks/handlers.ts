import { http, HttpResponse } from "msw";
import documents from "./data.json";

export const handlers = [
  http.get("/api/documents", () => {
    return HttpResponse.json(documents, { status: 200 });
  }),

  http.all(
    "https://o4508194141503488.ingest.de.sentry.io/*",
    async ({ request }) => {
      try {
        const response = await fetch(request);
        return response;
      } catch (error) {
        console.warn("Failed to forward request to Sentry:", error);
        return new HttpResponse(null, { status: 200 });
      }
    }
  ),
];
