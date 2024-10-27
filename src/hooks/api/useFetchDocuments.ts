import { useAtom } from "jotai";
import { documentsAtom } from "@/store/documentsAtom";

export const useFetchDocuments = () => {
  const [{ data, isLoading, isError }] = useAtom(documentsAtom);

  return {
    data,
    isLoading,
    isError,
  };
};
