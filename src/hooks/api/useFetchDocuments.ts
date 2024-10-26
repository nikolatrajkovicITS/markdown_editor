import { useAtom } from "jotai";
import { documentsAtom } from "@/store/documentsAtom";

export const useFetchDocuments = () => {
  const [queryState] = useAtom(documentsAtom);
  return queryState;
};
