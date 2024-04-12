import { ActionTypes } from '../constants';

// fetch user data
export const fetchUsers = () => ({
  type: ActionTypes.FETCH_USERS_REQUEST
});

// add new user
export const addUser = (user) => ({
  type: ActionTypes.ADD_USER_REQUEST,
  payload: user
});

// update user
export const updateUser = (userId, user) => ({
  type: ActionTypes.UPDATE_USER_REQUEST,
  payload: { userId, user }
});

// delete user
export const deleteUser = (userId) => ({
  type: ActionTypes.DELETE_USER_REQUEST,
  payload: userId
});
