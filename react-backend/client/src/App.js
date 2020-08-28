import React, { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState([]);

  useEffect(async () => {
    /* fetch("/users")
      .then((res) => res.json())
      .then((username) => setUsername(username)); */

    const response = await fetch("/users");
    const data = await response.json();
    setUsername(data);
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
