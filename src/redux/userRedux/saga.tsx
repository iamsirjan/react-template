import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { deleteUsers, getUsers } from "../../api";
import actions from "./action";
import { toast } from "react-toastify";

function* getAllUsers(action:any):any {
  try {
    let apiResponse = yield call(getUsers);
    let { data } = apiResponse;
    console.log(data)
    
    yield put({
      type: actions.GET_USERS_SUC,
      details: data,
    });
  } catch (err) {
    yield put({
      type: actions.GET_USERS_FAIL,
    });
  }
}

function* deleteUser(action:any):any {
  try {
    let apiResponse = yield call(deleteUsers, action.userId);

    const id = action.userId;

    yield put({
      type: actions.DLT_USERS_SUC,
      details: id,
    });
    toast("User has been deleted");
  } catch (err) {
    yield put({
      type: actions.DLT_USERS_FAIL,
    });
  }
}

function* editUser(action:any):any {
  try {
    let apiResponse = yield call(deleteUsers, action.userId);

    const id = action.userId;

    yield put({
      type: actions.EDIT_USERS_SUC,
      details: id,
    });
    toast("User has been edited");
  } catch (err) {
    yield put({
      type: actions.EDIT_USERS_FAIL,
    });
  }
}

function* addUser(action:any):any {
console.log(action.payload)
  try {
   

    yield put({
      type: actions.ADD_USERS_SUC,
      details:action.payload,
     
    });
    // toast("User has been edited");
  } catch (err) {
    yield put({
      type: actions.ADD_USERS_FAIL,
    });
  }
}

export function* getUserDetails() {
  yield takeEvery(actions.GET_USERS_REQ, getAllUsers);
  yield takeEvery(actions.DLT_USERS_REQ, deleteUser);
  yield takeEvery(actions.EDIT_USERS_REQ, editUser);
  yield takeEvery(actions.ADD_USERS_REQ, addUser);
}

export default function* userDetails():any {
  return yield all([fork(getUserDetails)]);
}
