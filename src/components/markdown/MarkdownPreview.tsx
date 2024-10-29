import { Eye } from "lucide-react";
import { IconButton } from "@/components/ui";
import { markdownToHtml } from "@/utils/markdown";

interface MarkdownPreviewProps {
  markdown: string;
  previewMode: boolean;
  onTogglePreview: () => void;
}

export const MarkdownPreview = ({
  markdown,
  previewMode,
  onTogglePreview,
}: MarkdownPreviewProps) => {
  return (
    <div className={`${previewMode ? "w-full" : "w-1/2"} p-2`}>
      <div className="flex justify-between items-center space-x-2 mb-2">
        <h2 className="text-sm font-semibold">PREVIEW</h2>
        <IconButton
          icon={<Eye className="w-5 h-5 text-gray-400" />}
          onClick={onTogglePreview}
          label={previewMode ? "Show editor" : "Show preview only"}
        />
      </div>
      <div
        className="w-full h-[calc(100vh-12rem)] bg-gray-800 p-4 rounded overflow-auto 
                   prose prose-invert prose-headings:text-gray-100 prose-p:text-gray-300"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(markdown) }}
      />
    </div>
  );
};
