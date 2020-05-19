import React from "react";
import TodoList from "./TodoList";

const Todo = (props) => {
  return (
    <div className="list-item">
      {props.content}
      <button
        class="delete is-pulled-right"
        onClick={() => {
          props.onDelete(props.id);
        }}
      ></button>
    </div>
  );
};

export default Todo;
