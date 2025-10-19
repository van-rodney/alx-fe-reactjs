import React, { useState } from 'react'

function AddTodoForm({ onAdd }){
  const [text, setText] = useState('')
  return (
    <form onSubmit={e=>{ e.preventDefault(); if(text.trim()){ onAdd(text.trim()); setText('') } }}>
      <input placeholder="New todo" value={text} onChange={e=>setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

export default function TodoList(){
  const [todos, setTodos] = useState([
    { id:1, text:'Buy milk', completed:false },
    { id:2, text:'Study React', completed:false }
  ])

  function addTodo(text){
    setTodos(prev => [...prev, { id: Date.now(), text, completed:false }])
  }
  function toggleTodo(id){
    setTodos(prev => prev.map(t => t.id===id? {...t, completed: !t.completed } : t))
  }
  function deleteTodo(id){
    setTodos(prev => prev.filter(t => t.id!==id))
  }

  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map(t=> (
          <li key={t.id}>
            <span onClick={()=>toggleTodo(t.id)} style={{textDecoration: t.completed? 'line-through' : 'none', cursor:'pointer'}}>{t.text}</span>
            <button onClick={()=>deleteTodo(t.id)} style={{marginLeft:8}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
