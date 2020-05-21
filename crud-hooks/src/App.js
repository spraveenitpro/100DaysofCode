import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";

const App = () => {
  const userData = [
    { id: 1, name: "Steve bn", username: "steve2323" },
    { id: 2, name: "Raj cn", username: "raj2323" },
    { id: 3, name: "kelly gn", username: "kellycd" },
  ];

  const [users, setUsers] = useState(userData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD APP with React</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Users</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
