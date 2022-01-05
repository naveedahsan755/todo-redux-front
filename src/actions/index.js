export const getLists = () => ({
  type: "GET_LISTS",
});

export const getListsSuccess = ({ lists }) => ({
  type: "GET_LISTS_SUCCESS",
  payload: { lists },
});

export const addList = ({ list, id }) => ({
  type: "ADD_LIST",
  payload: { list, id },
});

export const removeList = ({ id }) => ({
  type: "REMOVE_LIST",
  payload: { id },
});

export const setListInput = ({ inputListValue, id }) => ({
  type: "SET_LIST_INPUT",
  payload: { inputListValue, id },
});

export const setTodoInput = ({ title, date, done, tid }) => ({
  type: "SET_TODO_INPUT",
  payload: { title, date, done, tid },
});

export const setTodos = ({ todos, id }) => ({
  type: "SET_TODOS",
  payload: { todos, id },
});

export const addTodo = ({ todo }) => ({
  type: "ADD_TODO",
  payload: { todo },
});

export const removeTodo = ({ id, tid }) => ({
  type: "REMOVE_TODO",
  payload: { id, tid },
});
