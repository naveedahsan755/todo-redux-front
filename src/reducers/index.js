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

export default combineReducers({
  lists: listsReducer,
  listInput: listInputReducer,
});
