import React, { useState, useCallback } from 'react'
import './app.css'
import TodoList from '../TodoList/TodoList'
import Layout from '../Layout'

// Define a type for items
type TodoItem = {
  id: string
  text: string
}

const App: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([
    { id: `item-1`, text: 'Buy milk' },
    { id: `item-2`, text: 'Buy bread' },
    { id: `item-3`, text: 'Some other task' },
  ])

  const addTask = useCallback(
    (taskText: string) => {
      // Create a new task with a unique ID
      // may be over skill in this small app but good to have in real project
      // also help add unique key in react list to optimize performance
      const newTask: TodoItem = {
        id: `item-${new Date().getTime()}-${items.length}`,
        text: taskText,
      }
      setItems((prevItems) => [...prevItems, newTask])
    },
    [items.length]
  )

  return (
    <Layout
      complementary={
        <p>
          You have <strong>{items.length}</strong> total tasks.
        </p>
      }
    >
      <TodoList items={items} addTask={addTask} />
    </Layout>
  )
}

export default App
