import axios from "axios";

export const getLists = () => {
  return axios.get("/lists");
};

export const setList = ({ list }) => {
  return axios.post("/lists", {
    name: list,
  });
};

export const removeList = ({ id }) => {
  return axios.delete("/lists", { data: { id } });
};

export const editList = ({ id, list }) => {
  return axios.put("/lists", { id, name: list });
};

export const setTodo = ({ todo }) => {
  return axios.post("/todos", {
    id: todo.id,
    title: todo.title,
    date: todo.date,
    done: todo.done,
  });
};

export const editTodo = ({ id, todo }) => {
  return axios.put("/todos", { id, ...todo });
};

export const removeTodo = ({ id, tid }) => {
  return axios.delete("/todos", { data: { id, tid } });
};
