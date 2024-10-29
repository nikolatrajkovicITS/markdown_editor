interface MarkdownTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const MarkdownTextarea = ({
  value,
  onChange,
}: MarkdownTextareaProps) => {
  return (
    <div className="w-1/2 p-4">
      <h2 className="text-sm font-semibold mb-2">MARKDOWN</h2>
      <textarea
        value={value}
        onChange={onChange}
        className="w-full h-[calc(100vh-12rem)] bg-gray-800 p-4 rounded resize-none 
                 focus:outline-none focus:ring-2 focus:ring-orange-500
                 text-gray-100"
        placeholder="Start typing your markdown here..."
      />
    </div>
  );
};
