import React from "react";
import TodoList from "./TodoList";
import { ListGroup, Button } from "react-bootstrap";

const Todo = (props) => {
  return (
    <ListGroup.Item>
      {props.content}{" "}
      <Button
        variant="danger"
        className="float-right"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        Complete
      </Button>{" "}
    </ListGroup.Item>
  );
};

export default Todo;
