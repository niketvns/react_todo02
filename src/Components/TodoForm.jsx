import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addTodo(input);
      setInput("");
    } else {
      alert("Enter Todo!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo__form">
      <input
        type="text"
        placeholder="Add a ToDo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

export { TodoForm };
