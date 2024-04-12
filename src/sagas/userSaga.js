import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants';
import * as API from '../api'; // Import functions to make API calls

function* fetchUsersSaga() {
  try {
    const users = yield call(API.fetchUsers);
    yield put({ type: ActionTypes.FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_USERS_FAILURE, payload: error.message });
  }
}

function* addUserSaga(action) {
  try {
    yield call(API.addUser, action.payload);
    yield put({ type: ActionTypes.ADD_USER_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: ActionTypes.ADD_USER_FAILURE, payload: error.message });
  }
}

function* updateUserSaga(action) {
  try {
    yield call(API.updateUser, action.payload.userId, action.payload.user);
    yield put({ type: ActionTypes.UPDATE_USER_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: ActionTypes.UPDATE_USER_FAILURE, payload: error.message });
  }
}

function* deleteUserSaga(action) {
  try {
    yield call(API.deleteUser, action.payload);
    yield put({ type: ActionTypes.DELETE_USER_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: ActionTypes.DELETE_USER_FAILURE, payload: error.message });
  }
}

function* userSaga() {
  yield takeLatest(ActionTypes.FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeLatest(ActionTypes.ADD_USER_REQUEST, addUserSaga);
  yield takeLatest(ActionTypes.UPDATE_USER_REQUEST, updateUserSaga);
  yield takeLatest(ActionTypes.DELETE_USER_REQUEST, deleteUserSaga);
}

export default userSaga;
