import { atomWithQuery } from "jotai-tanstack-query";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const fetchDocuments = async () => {
  const response = await fetch("/api/documents");
  if (!response.ok) throw new Error("Failed to fetch documents");
  return response.json();
};

export const documentsAtom = atomWithQuery(() => ({
  queryKey: ["documents"],
  queryFn: fetchDocuments,
  queryClient,
}));
