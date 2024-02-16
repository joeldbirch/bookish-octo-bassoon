import './app.css';
import TodoList from '../TodoList/TodoList';
import Layout from '../Layout';
import { useState } from 'react';

function App() {
  const [totalItems, setTotalItems] = useState(0);
  return (
    <Layout
      complementary={
        <p>
          You have <strong>{totalItems}</strong> total tasks.
        </p>
      }
    >
      <TodoList setTotalItems={setTotalItems} />
    </Layout>
  );
}

export default App;
