import React, { useRef, useCallback } from 'react'

interface TodoListProps {
  items: { id: string; text: string }[]
  addTask: (taskText: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ items, addTask }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const sanitizeInput = useCallback((input: string): string => {
    return input.replace(/[<>]/g, (char) => (char === '<' ? '&lt;' : '&gt;'))
  }, [])

  const handleAddTask = () => {
    if (inputRef.current) {
      const newTask = inputRef.current.value.trim()
      if (newTask) {
        addTask(sanitizeInput(newTask))
        inputRef.current.value = '' // Clear input field
      }
    }
  }

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div>
      <button onClick={handleAddTask}>Add Task</button>
      <input placeholder="new task" ref={inputRef} onKeyDown={handleEnter} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
