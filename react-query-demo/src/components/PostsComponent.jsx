import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"], // ✅ Pass an object
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // ✅ Data stays cached for 5 minutes
    staleTime: 1000 * 60, // ✅ Data is considered fresh for 1 minute
    refetchOnWindowFocus: false, // ✅ Prevents auto-refetch when switching back to tab
    keepPreviousData: true,
  });

  const isError = !!error; 

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;