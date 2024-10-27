import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import Providers from "@/store/Providers";
import "@/styles/main.css";

import { initSentry } from "@/config/sentry";

initSentry();

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser").then(({ worker }) => {
    worker.start({
      onUnhandledRequest: "bypass",
    });
  });
}

// Accessibility testing Axe
if (process.env.NODE_ENV === "development") {
  import("@axe-core/react").then((axe) => {
    axe.default(React, createRoot, 1000);
  });
}

const queryClient = new QueryClient();


const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Providers>
        <App />
      </Providers>
    </QueryClientProvider>
  </StrictMode>
);
