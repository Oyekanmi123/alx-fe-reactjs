import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <>
      <div>
        <h1>Todo App</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      
    </>
  )
}

export default App
