import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

async function fetchPosts(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
}

async function createPost(newPost){
  const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
  return res.data
}

export default function PostsComponent(){
  const queryClient = useQueryClient()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { data, error, isLoading, isError, refetch, isFetching, dataUpdatedAt } = useQuery(['posts'], fetchPosts)

  const mutation = useMutation(createPost, {
    // optimistic update: add the new post to the cache immediately
    onMutate: async (newPost) => {
      await queryClient.cancelQueries(['posts'])
      const previous = queryClient.getQueryData(['posts']) || []
      const optimistic = [{ ...newPost, id: Math.random()*-1 }, ...previous]
      queryClient.setQueryData(['posts'], optimistic)
      return { previous }
    },
    onError: (err, newPost, context) => {
      if(context?.previous) queryClient.setQueryData(['posts'], context.previous)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['posts'])
    }
  })

  function handleSubmit(e){
    e.preventDefault()
    if(!title.trim() || !body.trim()) return
    mutation.mutate({ title, body, userId: 1 })
    setTitle('')
    setBody('')
  }

  if(isLoading) return <div>Loading posts...</div>
  if(isError) return <div>Error: {error.message}</div>

  const cacheAgeSec = dataUpdatedAt ? Math.round((Date.now() - dataUpdatedAt)/1000) : 'N/A'

  return (
    <div>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <button onClick={()=>refetch()} disabled={isFetching}>Refetch</button>
        <div>{isFetching ? 'Refreshing...' : `Cache age: ${cacheAgeSec}s`}</div>
      </div>

      <form onSubmit={handleSubmit} style={{marginTop:12, marginBottom:12}}>
        <h3>Create Post (optimistic)</h3>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} style={{display:'block',width:'100%',marginBottom:6}} />
        <textarea placeholder="Body" value={body} onChange={e=>setBody(e.target.value)} style={{display:'block',width:'100%',marginBottom:6}} />
        <button type="submit" disabled={mutation.isLoading}>{mutation.isLoading ? 'Posting...' : 'Create Post'}</button>
        {mutation.isError && <div style={{color:'red'}}>Create failed</div>}
      </form>

      <ul>
        {data.slice(0,10).map(post=> (
          <li key={post.id} style={{marginBottom:10}}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
