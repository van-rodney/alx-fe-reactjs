import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList'

test('renders initial todos', ()=>{
  render(<TodoList />)
  expect(screen.getByText(/Buy milk/i)).toBeInTheDocument()
  expect(screen.getByText(/Study React/i)).toBeInTheDocument()
})

test('can add a todo', ()=>{
  render(<TodoList />)
  const input = screen.getByPlaceholderText(/New todo/i)
  fireEvent.change(input, { target: { value: 'New item' } })
  fireEvent.submit(input.closest('form'))
  expect(screen.getByText(/New item/i)).toBeInTheDocument()
})

test('can toggle and delete todo', ()=>{
  render(<TodoList />)
  const item = screen.getByText(/Buy milk/i)
  fireEvent.click(item)
  expect(item).toHaveStyle('text-decoration: line-through')
  const del = screen.getAllByText(/Delete/i)[0]
  fireEvent.click(del)
  expect(item).not.toBeInTheDocument()
})
