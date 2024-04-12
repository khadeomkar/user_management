import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions/userActions';

const EditUserForm = ({ user, setEditUser }) => {
  const { loading } = useSelector(state => state.users);
  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const dispatch = useDispatch();

  // store form data in to state
  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(user.id, updatedUser));
    setEditUser("");
  };

  return (
    <form className='form-area' onSubmit={handleSubmit}>
      <h1>Edit User</h1>

      <div className='form-input'>
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={updatedUser.name} 
          onChange={handleChange} 
          placeholder="Name" 
          required
        />
      </div>

      <div className='form-input'>
        <label>Username</label>
        <input 
          type="text" 
          name="username" 
          value={updatedUser.username} 
          onChange={handleChange} 
          placeholder="Username" 
          required
        />
      </div>
      
      <div className='form-input'>
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={updatedUser.email} 
          onChange={handleChange} 
          placeholder="Email"
          required 
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
      >
        Update
      </button>
      <button 
        className='cancel-button' 
        type="button" 
        onClick={() => setEditUser("")}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
