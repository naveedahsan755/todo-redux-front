import { put, all, takeEvery, call } from "redux-saga/effects";
import { getListsSuccess } from "../actions";
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

export default function* rootSaga() {
  yield all([watchGetLists(), watchAddList(), watchRemoveList()]);
}
