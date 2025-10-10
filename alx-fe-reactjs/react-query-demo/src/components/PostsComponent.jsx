import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

async function fetchPosts(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
}

export default function PostsComponent(){
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(['posts'], fetchPosts, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30
  })

  if(isLoading) return <div>Loading posts...</div>
  if(isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <button onClick={()=>refetch()} disabled={isFetching}>Refetch</button>
      <div style={{marginTop:10}}>{isFetching ? 'Refreshing...' : ''}</div>
      <ul>
        {data.slice(0,10).map(post=> (
          <li key={post.id}><strong>{post.title}</strong><p>{post.body}</p></li>
        ))}
      </ul>
    </div>
  )
}
