import React, { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((username) => setUsername(username));
  }, []);

  return (
    <div className="App">
      {username.map((names) => (
        <li key={names.id}>{names.username}</li>
      ))}
    </div>
  );
}

export default App;
