import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const onUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      console.log(usersList);
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    })
  }

  return (
    <div>
      <AddUser onAddUser={onUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
