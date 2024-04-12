import { combineReducers } from 'redux';
import { ActionTypes } from '../constants';

const initialState = {
  users: [],
  loading: false,
  error: null
};

const usersReducer = (state = initialState, action) => {
  // add new user in to state
  const addNewUserData = (payload) => {
    let newUser = payload;
    let tempUsers = [];
    tempUsers = state.users;
    const newUserId = Math.max(...tempUsers.map(user => user.id)) + 1;
    const userWithId = { ...newUser, id: newUserId };
    tempUsers.push(userWithId);
    return tempUsers;
  }

  // update perticukar user from state
  const updateUserData = (payload) => {
    let tempUsers = [];
    tempUsers = state.users;
    const index = tempUsers.findIndex((x) => x.id === payload.userId);
    if(index >= 0) {
      tempUsers[index] = payload.user;
    }
    return tempUsers;
  } 

  // delete user from state
  const deleteUserData = (payload) => {
    let tempUsers = [];
    tempUsers = state.users;
    const index = tempUsers.findIndex((x) => x.id === payload);
    if(index >= 0) {
      tempUsers.splice(index, 1);
    }
    return tempUsers;
  }

  switch (action.type) {
    case ActionTypes.FETCH_USERS_REQUEST:
    case ActionTypes.ADD_USER_REQUEST:
    case ActionTypes.UPDATE_USER_REQUEST:
    case ActionTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null
      };
    case ActionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        users: addNewUserData(action.payload),
        loading: false
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: updateUserData(action.payload),
        loading: false
      };
    case ActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: deleteUserData(action.payload),
        loading: false
      };
    case ActionTypes.FETCH_USERS_FAILURE:
    case ActionTypes.ADD_USER_FAILURE:
    case ActionTypes.UPDATE_USER_FAILURE:
    case ActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer
});
