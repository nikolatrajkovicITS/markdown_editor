import { http } from "msw";
import documents from "./data.json";

// Define request handlers / Mock api endpoints
export const handlers = [
  http.get("/api/documents", () => {
    return new Response(JSON.stringify(documents), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
];
