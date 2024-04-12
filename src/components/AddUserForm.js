import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../actions/userActions';

const AddUserForm = () => {
  const { loading } = useSelector(state => state.users);
  const [user, setUser] = useState({ name: '', username: '', email: '' });
  const dispatch = useDispatch();

  // store form data in to state
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser({ name: '', username: '', email: '' });
  };

  return (
    <form className='form-area' onSubmit={handleSubmit}>
      <h1>Add User</h1>
      
      <div className='form-input'>
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={user.name} 
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
          value={user.username} 
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
          value={user.email} 
          onChange={handleChange} 
          placeholder="Email"
          required 
        />
      </div>
      
      <button 
        type="submit"
        disabled={loading}
      >
        Save
      </button>
    </form>
  );
};

export default AddUserForm;
