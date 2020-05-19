import React from "react";
import { FormControl, Form, Button } from "react-bootstrap";

class SubmitForm extends React.Component {
  state = {
    term: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.term === "") return;
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Control
            type="input"
            type="text"
            className="input"
            placeholder="Enter Item"
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          />
          <Button variant="primary" type="submit" size="lg" block>
            Add Todo
          </Button>
        </Form>
      </>

      /* <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter Item"
          value={this.state.term}
          onChange={(e) => {
            this.setState({ term: e.target.value });
          }}
        />
        <button className="button">Submit</button>
      </form>
      */
    );
  }
}

export default SubmitForm;
