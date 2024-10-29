import { Menu, Trash2, Save } from "lucide-react";
import { Button, IconButton } from "@/components/ui";
import { trackEvent } from "@/config/segment";

interface MarkdownHeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const MarkdownHeader = ({
  sidebarOpen,
  onToggleSidebar,
}: MarkdownHeaderProps) => {
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
          value="welcome.md"
          className="bg-gray-700 px-2 py-1 rounded text-sm"
          readOnly
        />
        <IconButton
          icon={<Trash2 className="w-5 h-5 text-gray-400" />}
          onClick={() => trackEvent("document_deleted")}
          label="Delete document"
        />
      </div>

      <Button
        variant="primary"
        icon={<Save className="w-4 h-4 mr-2" />}
        onClick={() => trackEvent("document_saved")}
      >
        Save Changes
      </Button>
    </header>
  );
};
