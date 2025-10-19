import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PostsComponent from './components/PostsComponent'

// sensible defaults: keep data fresh for 5 minutes, retry once on failure
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    }
  }
})

export default function App(){
  const [showPosts, setShowPosts] = useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{padding:20}}>
        <h1>React Query Demo</h1>
        <div style={{marginBottom:12}}>
          <button onClick={() => setShowPosts(s => !s)}>
            {showPosts ? 'Hide' : 'Show'} Posts
          </button>
        </div>

        {showPosts && <PostsComponent />}

      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}
