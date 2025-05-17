import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let addNewTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), idDone: false }];
    });
    setNewTodo("");
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let styles = {
    width: "400px",
    height: "40px",
    boxSizing: "border-box",
    padding: "auto",
    marginBottom: "10px",
    // borderRadius: "5px ",
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Todo"
            onChange={updateTodoValue}
            value={newTodo}
            style={styles}
          />
        </div>

        <div>
          <button onClick={addNewTodo} style={styles}>
            Add
          </button>
        </div>
      </div>

      <hr />
      <h2>Todo</h2>
      <ul style={{ textAlign: "start" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.isDone ? (
              <span style={{ textDecoration: "line-through" }}>
                {todo.task}
              </span>
            ) : (
              <span>{todo.task}</span>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => upperCaseOne(todo.id)}>Uppercase</button>
            <button onClick={() => markAsDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>Uppercase All</button>
    </div>
  );
}
