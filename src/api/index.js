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
