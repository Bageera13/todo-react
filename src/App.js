import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/Todo/TodoList';
import TodoCreateItem from './components/Todo/TodoCreateItem';
import { getTodosList } from './service';

function App() {
 
  const [todos, setTodos] = useState ([])
  useEffect(() => {
    let todosList = getTodosList()
    console.log(todosList)
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo (id) {
    setTodos (todos.filter(todo => todo.id !== id))
  }

  function addTodo (title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        }
      ])
    )
  }

  return (
      <div className="container">
        <h1>Список дел:</h1>

        <TodoCreateItem onCreate={addTodo} />

        <TodoList todos={todos} onToggle={toggleTodo} deleteTodo={removeTodo} />
      </div>
  );
}

export default App;
