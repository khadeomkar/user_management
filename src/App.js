import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import UserTable from './components/UserTable';
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>User Management</h1>
        <UserTable />
      </div>
    </Provider>
  );
}

export default App;
