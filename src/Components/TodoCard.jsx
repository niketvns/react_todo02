import { MdDelete } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import Toggle from "react-toggle";

function TodoCard({ id, todo, toggleTodoStatus, deleteTodo }) {
  return (
    <div className={`todo__card ${todo.isCompleted && "completed"}`}>
      <p className="todo__card--title">
        <b>{todo.todo}</b>
      </p>
      <p className="created__at">
        <FaRegClock /> {todo.createdAt}
      </p>
      <div className="todo__status">
        <b>Complete:</b>
        <Toggle
          checked={todo.isCompleted}
          icons={false}
          onChange={() => toggleTodoStatus(id)}
        />
      </div>
      <button onClick={() => deleteTodo(id)}>
        <MdDelete />
      </button>
    </div>
  );
}

export { TodoCard };
