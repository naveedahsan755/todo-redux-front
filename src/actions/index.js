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
