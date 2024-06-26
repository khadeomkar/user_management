export const ActionTypes = {
  FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE',
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'ADD_USER_FAILURE',
  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE: 'DELETE_USER_FAILURE',
};

export const API_ENDPOINTS = {
  FETCH_USERS: 'https://jsonplaceholder.typicode.com/users',
  ADD_USER: 'https://jsonplaceholder.typicode.com/users',
  UPDATE_USER: 'https://jsonplaceholder.typicode.com/users',
  DELETE_USER: 'https://jsonplaceholder.typicode.com/users',
};
