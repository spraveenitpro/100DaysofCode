import React from "react";
import { Button, Card, Container, Col, Row } from "react-bootstrap";

const Header = (props) => {
  return <Card.Header>You have {props.numTodos} tasks!</Card.Header>;
};

export default Header;
