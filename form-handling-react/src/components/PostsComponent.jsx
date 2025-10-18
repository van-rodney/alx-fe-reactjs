import React from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(['posts'], fetchPosts, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <div>Loading posts...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div style={{ padding: 16 }}>
      <h2>Posts</h2>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Refetch Posts'}
        </button>
      </div>
      <ul>
        {posts.slice(0, 20).map((p) => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            <strong>{p.title}</strong>
            <p style={{ margin: 4 }}>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
