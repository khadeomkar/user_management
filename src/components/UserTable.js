import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../actions/userActions';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

const UserTable = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);
  const [edituser, setEditUser] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    // Filter users based on search query
    if(!loading) {
      if(searchQuery !== '') {
        const filtered = users.filter(user => {
          const fullName = `${user.name} ${user.username} ${user.email}`.toLowerCase();
          return fullName.includes(searchQuery.toLowerCase());
        });
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers(users);
      }
    }
  }, [users, searchQuery, loading]);

  // search data
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // edit button action managed
  const handleEdit = (user) => {
    setEditUser(user);
  };

  // delete button action managed
  const handleDelete = (userId) => {
    const result = window.confirm("Are you sure you want to delete user?");
    if (result) {
      dispatch(deleteUser(userId));
    } 
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      {// check function edit or add and display respective page
      edituser !== '' ? (
        <EditUserForm
          user={edituser}
          setEditUser={setEditUser}
        />
      ) : (
        <AddUserForm />
      )}
      
      {// data loader
      loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='user-list'>
          <div className='user-list-header'>
            <h2>User List</h2>
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>Edit</button> 
                    <button onClick={() => handleDelete(user.id)}>Delete</button> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserTable;
