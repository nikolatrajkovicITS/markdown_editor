import { useState } from "react";
import { useAtom } from "jotai";
import { sidebarOpenAtom, previewModeAtom } from "@/store/atoms";
import { MarkdownHeader } from "@/components/markdown/MarkdownHeader";
import { MarkdownPreview } from "@/components/markdown/MarkdownPreview";
import { MarkdownTextarea } from "@/components/markdown/MarkdownTextarea";
import { Sidebar } from "@/components/Sidebar";

export const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState<string>(
    `# Welcome to Markdown\n\nStart typing your markdown here...`
  );
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const [previewMode, setPreviewMode] = useAtom(previewModeAtom);

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
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          )}

          <MarkdownPreview
            markdown={markdown}
            previewMode={previewMode}
            onTogglePreview={() => setPreviewMode(!previewMode)}
          />
        </div>
      </main>
    </div>
  );
};
