import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const addUser = async (user) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const updateUser = async (userId, user) => {
  try {
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/users/${userId}`, user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
