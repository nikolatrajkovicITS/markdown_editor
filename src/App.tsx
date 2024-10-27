import DocumentList from "@/components/DocumentList";
import { initSegment } from "@/config/segment";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    initSegment();
  }, []);

  return (
    <main className="App">
      <header>
        <h1>Document Viewer</h1>
      </header>
      <DocumentList />
    </main>
  );
};

export default App;
