import React, { useEffect, useState } from 'react';

interface TodoListProps {
  setTotalItems: (total: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ setTotalItems }) => {
  const [items, setItems] = useState<string[]>(['Buy milk', 'Buy bread']);
  const [inputData, setInputData] = useState<string>('');

  useEffect(() => {
    // Simulating a side effect that adds a new task on mount
    const taskItem = [...items, 'Some other task'];
    setItems(taskItem);
    setTotalItems(taskItem.length);
  }, [setTotalItems]); // Include setTotalItems in the dependencies array

  const handleClick = () => {
    if (inputData.trim() !== '') {
      const addClickTask = [...items, inputData];
      setItems(addClickTask);
      setTotalItems(addClickTask.length);
      setInputData('');
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <input type='text' placeholder="Add a new task..." className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        value={inputData} onChange={handleInput} />
      <button onClick={handleClick}>Add Task</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
