import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
    dataUpdatedAt,
    status,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
    refetchOnWindowFocus: false,
  });

  const handleInvalidate = () => queryClient.invalidateQueries(["posts"]);
  const handleRemove = () => queryClient.removeQueries(["posts"]);
  const handlePrefetch = async () => {
    try {
      await queryClient.prefetchQuery(["posts"], fetchPosts);
    } catch (e) {
      // noop
    }
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  const lastUpdated = dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : "—";

  return (
    <div style={{ padding: 12, border: "1px solid #eee", marginTop: 12 }}>
      <h2>Posts</h2>
      <div style={{ marginBottom: 8 }}>
        <button onClick={() => refetch()} disabled={isFetching} style={{ marginRight: 8 }}>
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
        <button onClick={handlePrefetch} style={{ marginRight: 8 }}>
          Prefetch
        </button>
        <button onClick={handleInvalidate} style={{ marginRight: 8 }}>
          Invalidate Cache
        </button>
        <button onClick={handleRemove} style={{ marginRight: 8 }}>
          Remove Cache
        </button>
      </div>

      <div style={{ marginBottom: 8, color: "#666" }}>
        <small>status: {status} • last updated: {lastUpdated}</small>
      </div>

      <ul>
        {(data || []).slice(0, 20).map((post) => (
          <li key={post.id} style={{ marginBottom: 8 }}>
            <strong>{post.title}</strong>
            <p style={{ margin: 4 }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
