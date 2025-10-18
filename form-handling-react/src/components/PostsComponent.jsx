// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Something went wrong while fetching posts.</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: "1rem" }}>
        🔄 Refetch Posts
      </button>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
