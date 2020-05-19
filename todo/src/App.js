import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button, Card } from "react-bulma-components";
import SubmitForm from "./components/SubmitForm";
class App extends React.Component {
  state = {
    tasks: ["task1", "tassssssssssssssssk2", "task3"],
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <Card>
            <Header numTodos={this.state.tasks.length} />
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
            <SubmitForm onFormSubmit={this.handleSubmit} />
          </Card>
        </div>
      </>
    );
  }
}

export default App;
