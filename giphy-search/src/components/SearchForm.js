import React from "react";
import { Form, Button } from "react-bootstrap";

class SearchForm extends React.Component {
  state = {
    searchterm: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.giphySearch(e.target[0].value);
  };

  handleChange = (e) => {
    this.setState({ searchterm: e.target.value });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="gifForm">
          <Form.Label>Enter Search Term:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter"
            value={this.state.searchterm}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">Search for a Gif</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default SearchForm;
