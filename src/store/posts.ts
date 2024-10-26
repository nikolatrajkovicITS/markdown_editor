import { atomWithQuery } from "jotai-tanstack-query";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};

export const postsAtom = atomWithQuery(() => ({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  queryClient,
}));
