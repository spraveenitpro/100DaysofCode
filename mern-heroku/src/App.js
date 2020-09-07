import React, { useEffect, useState } from "react";
import axios from "axios";

const App = function () {
  const [users, setUsers] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("/api/users")
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []);

  function submitForm() {
    if (username === "") {
      alert("Enter username field");
      return;
    }
    if (email === "") {
      alert("Enter Email please");
      return;
    }
    axios
      .post("/api/users", {
        username: username,
        email: email,
      })
      .then(function () {
        alert("Account created as expected");
        window.location.reload();
      })
      .catch(function () {
        alert("Could not create account, please try again");
      });
  }

  return (
    <>
      <h1>Your Inbox</h1>
      {users === null ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No user available</p>
      ) : (
        <>
          <h2>Available Users</h2>
          <ol>
            {users.map((user, index) => (
              <li key={index}>
                Name: {user.name} - Email: {user.email}
              </li>
            ))}
          </ol>
        </>
      )}

      <form onSubmit={submitForm}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email address"
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
