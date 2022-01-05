import Moment from "moment";
import { connect } from "react-redux";

import { setTodos, setTodoInput, removeTodo } from "../actions";

const DisplayTodo = ({ todos, setTodos, setTodoInput, removeTodo }) => {
  if (!todos.todos || todos.todos?.length === 0) {
    return <h6 className="mx-4">No Task Added</h6>;
  }

  const handleDoneChange = (id) => {
    const tempTodos = todos.todos;
    const ind = tempTodos.findIndex((todo) => todo._id === id);
    tempTodos[ind].done = !tempTodos[ind].done;
    setTodos({
      todos: [...tempTodos],
      id: todos.id,
    });
  };

  const handleTodoRemove = (tid) => {
    removeTodo({ id: todos.id, tid });
  };

  const allTodos = todos.todos.map((todo) => {
    return (
      <div
        key={todo._id}
        className="border border-top-0 d-flex justify-content-between p-2"
      >
        <div>
          <div className="d-flex align-items-center px-2">
            {todo.done ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-square text-primary mx-1"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={() => handleDoneChange(todo._id)}
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-square text-danger mx-1"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={() => handleDoneChange(todo._id)}
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            )}
            <p className="mb-0">{todo.title}</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="px-2">
            <p className="mb-0">{Moment(todo.date).format("MM-DD-yyyy")}</p>
          </div>
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square text-primary"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
              onClick={() =>
                setTodoInput({
                  title: todo.title,
                  date: todo.date,
                  done: todo.done,
                  tid: todo._id,
                })
              }
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash-fill text-danger"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
              onClick={() => handleTodoRemove(todo._id)}
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="m-3">
        <div className="border d-flex justify-content-between p-2">
          <div>
            <div className="px-2">
              <h6 className="mb-0">Title</h6>
            </div>
          </div>
          <div className="d-flex">
            <div className="px-2">
              <h6 className="mb-0">Date</h6>
            </div>
            <div className="px-2">
              <h6 className="mb-0">Edit</h6>
            </div>
            <div className="px-2">
              <h6 className="mb-0">Delete</h6>
            </div>
          </div>
        </div>

        {allTodos}
      </div>
    </>
  );
};

export default connect(({ todos }) => ({ todos }), {
  setTodos,
  setTodoInput,
  removeTodo,
})(DisplayTodo);
