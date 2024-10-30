import { atom } from "jotai";

export interface MarkdownDocument {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export const documentsAtom = atom<MarkdownDocument[]>([
  {
    id: "1",
    name: "welcome.md",
    content: "# Welcome to Markdown\n\nStart typing your markdown here...",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

export const activeDocumentIdAtom = atom<string>("1");
