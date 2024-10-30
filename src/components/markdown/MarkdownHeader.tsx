import { Menu, Trash2 } from "lucide-react";
import { Button, IconButton } from "@/components/ui";
import { trackEvent } from "@/config/segment";
import { useDocuments } from "@/hooks/useDocuments";
import { useState } from "react";

interface MarkdownHeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const MarkdownHeader = ({
  sidebarOpen,
  onToggleSidebar,
}: MarkdownHeaderProps) => {
  const { activeDocument, updateDocument, deleteDocument } = useDocuments();
  const [isEditing, setIsEditing] = useState(false);
  const [documentName, setDocumentName] = useState(activeDocument?.name || "");

  const handleNameSubmit = () => {
    if (activeDocument && documentName.trim()) {
      updateDocument(activeDocument.id, { name: documentName.trim() });
      setIsEditing(false);
      trackEvent("document_renamed");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleNameSubmit();
    } else if (e.key === "Escape") {
      setDocumentName(activeDocument?.name || "");
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (activeDocument) {
      deleteDocument(activeDocument.id);
      trackEvent("document_deleted");
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center space-x-4">
        <IconButton
          icon={<Menu className="w-6 h-6" />}
          onClick={onToggleSidebar}
          label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        />
        <h1 className="text-xl font-bold">MARKDOWN</h1>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-400">Document Name</span>
        <input
          type="text"
          value={isEditing ? documentName : activeDocument?.name || ""}
          onChange={(e) => setDocumentName(e.target.value)}
          onFocus={() => {
            setIsEditing(true);
            setDocumentName(activeDocument?.name || "");
          }}
          onBlur={handleNameSubmit}
          onKeyDown={handleKeyDown}
          className="bg-gray-700 px-2 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <IconButton
          icon={<Trash2 className="w-5 h-5 text-gray-400" />}
          onClick={handleDelete}
          label="Delete document"
        />
      </div>

      <Button variant="primary" onClick={() => trackEvent("document_saved")}>
        Save Changes
      </Button>
    </header>
  );
};
