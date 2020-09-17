import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HarperDBProvider } from "use-harperdb";

ReactDOM.render(
  <React.StrictMode>
    <HarperDBProvider
      url="https://react-book-praveen.harperdbcloud.com"
      user="demodemo"
      password="demodemo"
    >
      <App />
    </HarperDBProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
