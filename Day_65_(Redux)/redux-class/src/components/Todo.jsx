import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMADClick = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.isDone ? (
              <span style={{ textDecoration: "line-through" }}>
                {todo.task}
              </span>
            ) : (
              <span>{todo.task}</span>
            )}

            <button onClick={() => handleDelClick(todo.id)}>Delete</button>
            <button onClick={() => handleMADClick(todo.id)}>
              Mark As Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
