import { useFetchDocuments } from "@/hooks/api/useFetchDocuments";

const DocumentList = () => {
  const { data: documents, isLoading, isError } = useFetchDocuments();

  if (isLoading) return <p>Loading documents...</p>;
  if (isError) return <p>Error fetching documents. Please try again.</p>;

  if (!Array.isArray(documents)) return <p>No documents available.</p>;

  return (
    <div>
      <h2>Documents</h2>
      <ul>
        {documents.map((doc) => (
          <li key={doc.name}>
            <h3>{doc.name}</h3>
            <p>Created at: {doc.createdAt}</p>
            <pre>{doc.content}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
