import { initSegment } from "@/config/segment";
import { useEffect } from "react";
import { MarkdownEditor } from "@/components/markdown/MarkdownEditor";

const App = () => {
  useEffect(() => {
    initSegment();
  }, []);

  return (
    <main className="App">
      <MarkdownEditor />
    </main>
  );
};

export default App;
