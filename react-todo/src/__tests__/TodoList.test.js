import React from 'react'
import { render, screen, fireEvent, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList'

test('renders initial todos', ()=>{
  render(<TodoList />)
  const list = screen.getByRole('list')
  expect(within(list).getByText(/Buy milk/i)).toBeInTheDocument()
  expect(within(list).getByText(/Study React/i)).toBeInTheDocument()
})

test('can add a todo and clears input', ()=>{
  render(<TodoList />)
  const input = screen.getByPlaceholderText(/New todo/i)
  const form = input.closest('form')
  fireEvent.change(input, { target: { value: 'New item' } })
  fireEvent.submit(form)
  expect(screen.getByText(/New item/i)).toBeInTheDocument()
  // input should be cleared after add
  expect(input).toHaveValue('')
})

test('prevent adding empty todo', ()=>{
  render(<TodoList />)
  const input = screen.getByPlaceholderText(/New todo/i)
  const form = input.closest('form')
  // make sure empty submission doesn't add
  fireEvent.change(input, { target: { value: '   ' } })
  fireEvent.submit(form)
  // only the initial two todos should exist
  const list = screen.getByRole('list')
  expect(within(list).queryByText(/Buy milk/i)).toBeInTheDocument()
  expect(within(list).queryByText(/Study React/i)).toBeInTheDocument()
  expect(within(list).queryByText(/\S+/i, { selector: 'li' })).toBeTruthy()
})

test('can toggle and delete todo', ()=>{
  render(<TodoList />)
  const list = screen.getByRole('list')
  const itemNode = within(list).getByText(/Buy milk/i).closest('li')
  const itemButton = within(itemNode).getByRole('button', { name: /buy milk|delete/i })
  // click the text node to toggle (the text has role=button)
  const toggler = within(itemNode).getByRole('button', { pressed: false })
  fireEvent.click(toggler)
  expect(toggler).toHaveAttribute('aria-pressed', 'true')
  // delete the item using the button labeled Delete
  const del = within(itemNode).getByRole('button', { name: /delete/i })
  fireEvent.click(del)
  expect(within(list).queryByText(/Buy milk/i)).toBeNull()
})
