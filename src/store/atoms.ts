import { atom } from "jotai";

export const sidebarOpenAtom = atom(true);
export const previewModeAtom = atom(false);
export const darkModeAtom = atom(true);

export interface Document {
  id: string;
  name: string;
  createdAt: Date;
}

export const documentsAtom = atom<Document[]>([
  {
    id: "1",
    name: "untitled-document.md",
    createdAt: new Date("2022-04-01"),
  },
  {
    id: "2",
    name: "welcome.md",
    createdAt: new Date("2022-04-01"),
  },
]);
