import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import SubmitForm from "./components/SubmitForm";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { throwStatement } from "@babel/types";

class App extends React.Component {
  state = {
    tasks: ["milk", "eggs", "cheese", "strawberries", "blueberries"],
  };

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card sborder="primary" style={{ width: "18rem" }}>
              <Header numTodos={this.state.tasks.length} />
              <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
              <SubmitForm onFormSubmit={this.handleSubmit} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
