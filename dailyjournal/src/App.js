import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import DailyList from "./components/daily-list.component";
import CreateDaily from "./components/create-daily.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={DailyList} />
      <Route path="/create" component={CreateDaily} />
    </Router>
  );
}

export default App;
