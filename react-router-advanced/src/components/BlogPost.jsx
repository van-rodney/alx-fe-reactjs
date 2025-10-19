import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost(){
  const { id } = useParams()
  return (
    <div style={{padding:20}}>
      <h1>Blog Post {id}</h1>
      <p>This is a dynamic blog post page for post id <strong>{id}</strong>.</p>
    </div>
  )
}
