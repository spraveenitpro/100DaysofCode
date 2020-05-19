import React from "react";
import Todo from "./Todo";
import { ListGroup } from "react-bootstrap";

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return (
      <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    );

    // return <p id={index}> {todo}</p>;
  });
  return <ListGroup variant="flush">{todos}</ListGroup>;
};

export default TodoList;
