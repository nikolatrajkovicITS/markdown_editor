import { useAtom } from "jotai";
import { sidebarOpenAtom, previewModeAtom } from "@/store/atoms";
import { MarkdownHeader } from "@/components/markdown/MarkdownHeader";
import { MarkdownPreview } from "@/components/markdown/MarkdownPreview";
import { MarkdownTextarea } from "@/components/markdown/MarkdownTextarea";
import { Sidebar } from "@/components/Sidebar";
import { useDocuments } from "@/hooks/useDocuments";

export const MarkdownEditor = () => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const [previewMode, setPreviewMode] = useAtom(previewModeAtom);
  const { activeDocument, updateDocument } = useDocuments();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (activeDocument) {
      updateDocument(activeDocument.id, { content: e.target.value });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      <MarkdownHeader
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="flex-grow flex">
        {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
        <div className={`flex-grow flex ${sidebarOpen ? "ml-0" : "ml-0"}`}>
          {!previewMode && (
            <MarkdownTextarea
              value={activeDocument?.content || ""}
              onChange={handleChange}
            />
          )}

          <MarkdownPreview
            markdown={activeDocument?.content || ""}
            previewMode={previewMode}
            onTogglePreview={() => setPreviewMode(!previewMode)}
          />
        </div>
      </main>
    </div>
  );
};
