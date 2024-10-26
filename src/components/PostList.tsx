import { useAtom } from "jotai";
import { postsAtom } from "@/store/posts";

const PostList = () => {
  const [{ data, isLoading }] = useAtom(postsAtom);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data?.map((post: any) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
