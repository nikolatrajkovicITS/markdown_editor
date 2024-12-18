import { atomWithQuery } from "jotai-tanstack-query";
import { QueryClient } from "@tanstack/react-query";
import * as Sentry from "@sentry/react";
import { trackEvent } from "@/config/segment";

const queryClient = new QueryClient();

const fetchDocuments = async () => {
  try {
    const response = await fetch("/api/documents");
    if (!response.ok) {
      throw new Error("Failed to fetch documents");
    }

    trackEvent("documents fetched");
    return response.json();
  } catch (error) {
    Sentry.captureException(`Error fetching documents Nikola_____: ${error}`);
    throw error;
  }
};

export const documentsAtom = atomWithQuery(() => ({
  queryKey: ["documents"],
  queryFn: fetchDocuments,
  queryClient,
}));
