import React, { useState } from "react";

const TodoList = () =>{
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a project", completed: false },
    ]);

    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
    
      const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      };

      return (
        <div>
          <h2>Todo List</h2>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
                data-testid={`todo-${todo.id}`}
              >
                {todo.text}
                <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }} data-testid={`delete-${todo.id}`}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
} 

export default TodoList;