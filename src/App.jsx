import { useState } from "react";
import "./App.css";
import { TodoCard, TodoForm } from "./Components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      todo: todoText,
      createdAt: new Date().toLocaleString(),
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoStatus = (id) => {
    const updatedTodos = todos.map((todo, index) =>
      index === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo, index) => index !== id && todo);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo__container">
      <h1>ToDo</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo_cards_container">
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            id={index}
            todo={todo}
            toggleTodoStatus={toggleTodoStatus}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
