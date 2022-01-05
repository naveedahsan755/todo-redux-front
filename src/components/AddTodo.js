import Moment from "moment";
import { connect } from "react-redux";
import { setTodoInput, addTodo } from "../actions";

const AddTodo = ({ todoInput, id, setTodoInput, addTodo }) => {
  const addTodoHandler = (event) => {
    event.preventDefault();
    addTodo({
      todo: {
        id,
        title: todoInput.title,
        date: todoInput.date,
        done: todoInput.done,
        tid: todoInput.tid,
      },
    });

    setTodoInput({
      title: "",
      date: "",
      done: false,
      tid: null,
    });
  };
  return (
    <>
      <form>
        <div className="d-flex m-3">
          <div className="form-group mx-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a todo"
              value={todoInput.title}
              onChange={(e) =>
                setTodoInput({
                  title: e.target.value,
                  date: todoInput.date,
                  done: todoInput.done,
                  tid: todoInput.tid,
                })
              }
            />
          </div>
          <div className="form-group mx-2">
            <input
              type="date"
              className="form-control"
              data-date-format="yyyy-MM-dd"
              value={
                todoInput.date
                  ? Moment(todoInput.date).format("yyyy-MM-DD")
                  : ""
              }
              onChange={(e) =>
                setTodoInput({
                  title: todoInput.title,
                  date: e.target.value,
                  done: todoInput.done,
                  tid: todoInput.tid,
                })
              }
            />
          </div>
          <div className="form-group mx-2">
            <input
              type="submit"
              className="btn btn-primary"
              value="Add Todo"
              onClick={(e) => addTodoHandler(e)}
              disabled={!(todoInput.title && todoInput.date && id)}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default connect(
  ({ todoInput, todos }) => ({ todoInput, id: todos.id }),
  { setTodoInput, addTodo }
)(AddTodo);
