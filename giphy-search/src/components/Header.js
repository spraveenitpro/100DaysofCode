import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Giphy Search</h1>
          <p>A quest to understand how the gif go through the tubes..</p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Header;
