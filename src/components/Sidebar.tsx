import { atom, useAtom } from "jotai";
import { FileText, X, Plus, Moon, Sun } from "lucide-react";
import { format } from "date-fns";
import { Button, IconButton } from "./ui";
import { useDocuments } from "@/hooks/useDocuments";

const darkModeAtom = atom(true);

export const Sidebar = ({ onClose }: { onClose: () => void }) => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const { documents, activeId, setActiveId, createDocument } = useDocuments();

  const handleCreateDocument = () => {
    createDocument();
  };

  const handleDocumentSelect = (docId: string) => {
    setActiveId(docId);
  };

  return (
    <div className="w-64 h-full bg-gray-900 text-gray-100 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h2 className="text-sm font-semibold text-gray-400">MY DOCUMENTS</h2>
        <IconButton
          icon={<X className="w-5 h-5" />}
          onClick={onClose}
          label="Close sidebar"
        />
      </div>

      <div className="p-4">
        <Button
          variant="primary"
          icon={<Plus className="w-4 h-4" />}
          className="w-full justify-center"
          onClick={handleCreateDocument}
        >
          New Document
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        {documents.map((doc) => (
          <button
            key={doc.id}
            onClick={() => handleDocumentSelect(doc.id)}
            className={`w-full text-left p-4 hover:bg-gray-800 flex items-start space-x-3 transition-colors
                      ${activeId === doc.id ? "bg-gray-800" : ""}`}
          >
            <FileText className="w-4 h-4 mt-1 text-gray-400" />
            <div className="flex-1 min-w-0">
              <div className="text-sm text-gray-300 truncate">{doc.name}</div>
              <div className="text-xs text-gray-500">
                {format(doc.createdAt, "dd MMM yyyy")}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Moon className="w-4 h-4 text-gray-400" />
            <div className="relative inline-block w-10 h-5">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={!darkMode}
                onChange={() => setDarkMode(!darkMode)}
                id="theme-toggle"
              />
              <label
                htmlFor="theme-toggle"
                className="block h-5 bg-gray-700 peer-checked:bg-orange-500 rounded-full w-10 cursor-pointer transition-colors"
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform
                            ${!darkMode ? "translate-x-5" : ""}`}
                />
              </label>
            </div>
            <Sun className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
