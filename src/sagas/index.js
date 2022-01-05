import { put, all, takeEvery, call } from "redux-saga/effects";
import { getListsSuccess, setTodos } from "../actions";
import * as api from "../api";

function* getLists() {
  const result = yield call(api.getLists);
  yield put(
    getListsSuccess({
      lists: result.data.data,
    })
  );
}

function* watchGetLists() {
  yield takeEvery("GET_LISTS", getLists);
}

function* addList({ payload }) {
  if (payload.id) {
    const result = yield call(api.editList, {
      id: payload.id,
      list: payload.list,
    });
    if (result.data.message === "OK") {
      yield call(getLists);
    }
  } else {
    const result = yield call(api.setList, { list: payload.list });
    if (result.data.message === "OK") {
      yield call(getLists);
    }
  }
}

function* watchAddList() {
  yield takeEvery("ADD_LIST", addList);
}

function* removeList({ payload }) {
  const result = yield call(api.removeList, { id: payload.id });
  if (result.data.message === "OK") {
    yield call(getLists);
  }
}

function* watchRemoveList() {
  yield takeEvery("REMOVE_LIST", removeList);
}

function* addTodo({ payload }) {
  if (payload.todo.tid) {
    const result = yield call(api.editTodo, {
      id: payload.todo.id,
      todo: {
        title: payload.todo.title,
        date: payload.todo.date,
        done: payload.todo.done,
        tid: payload.todo.tid,
      },
    });

    if (result.data.message === "OK") {
      yield put(setTodos({ todos: result.data.data, id: payload.todo.id }));
    }
  } else {
    const result = yield call(api.setTodo, { todo: payload.todo });
    if (result.data.message === "OK") {
      yield put(
        setTodos({ todos: result.data.data.todos, id: result.data.data._id })
      );
    }
  }
}

function* watchAddTodo() {
  yield takeEvery("ADD_TODO", addTodo);
}

function* removeTodo({ payload }) {
  const result = yield call(api.removeTodo, {
    id: payload.id,
    tid: payload.tid,
  });
  if (result.data.message === "OK") {
    yield put(setTodos({ todos: result.data.data, id: payload.id }));
  }
}

function* watchRemoveTodo() {
  yield takeEvery("REMOVE_TODO", removeTodo);
}

export default function* rootSaga() {
  yield all([
    watchGetLists(),
    watchAddList(),
    watchRemoveList(),
    watchAddTodo(),
    watchRemoveTodo(),
  ]);
}
