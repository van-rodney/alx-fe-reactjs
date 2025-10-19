import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post(){
  const { id } = useParams()
  return (
    <div style={{padding:20}}>
      <h1>Post {id}</h1>
      <p>This is a dynamic route showing post id {id}</p>
    </div>
  )
}
