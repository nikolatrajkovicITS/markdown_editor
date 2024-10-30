import { useAtom } from "jotai";
import {
  documentsAtom,
  activeDocumentIdAtom,
  type MarkdownDocument,
} from "@/store/documents";

export const useDocuments = () => {
  const [documents, setDocuments] = useAtom(documentsAtom);
  const [activeId, setActiveId] = useAtom(activeDocumentIdAtom);

  const activeDocument = documents.find((doc) => doc.id === activeId);

  const createDocument = () => {
    const newDoc: MarkdownDocument = {
      id: Date.now().toString(),
      name: "untitled.md",
      content: "# Untitled\n",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setDocuments((prev) => [...prev, newDoc]);
    setActiveId(newDoc.id);
    return newDoc;
  };

  const updateDocument = (id: string, updates: Partial<MarkdownDocument>) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, ...updates, updatedAt: new Date() } : doc
      )
    );
  };

  const deleteDocument = (id: string) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
    if (activeId === id) {
      setActiveId(documents[0]?.id || "");
    }
  };

  return {
    documents,
    activeDocument,
    activeId,
    setActiveId,
    createDocument,
    updateDocument,
    deleteDocument,
  };
};
