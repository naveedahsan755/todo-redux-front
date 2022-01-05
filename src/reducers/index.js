import { combineReducers } from "redux";

const listsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LISTS_SUCCESS":
      return action.payload.lists;
    default:
      return state;
  }
};

const listInputReducer = (state = { inputListValue: "", id: null }, action) => {
  switch (action.type) {
    case "SET_LIST_INPUT":
      return {
        inputListValue: action.payload.inputListValue,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

const todoInputReducer = (
  state = { title: "", date: "", done: false, tid: null },
  action
) => {
  switch (action.type) {
    case "SET_TODO_INPUT":
      return {
        title: action.payload.title,
        date: action.payload.date,
        done: action.payload.done,
        tid: action.payload.tid,
      };
    default:
      return state;
  }
};

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return { todos: action.payload.todos, id: action.payload.id };

    default:
      return state;
  }
};

export default combineReducers({
  lists: listsReducer,
  listInput: listInputReducer,
  todos: todosReducer,
  todoInput: todoInputReducer,
});
