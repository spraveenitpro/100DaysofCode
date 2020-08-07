import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  gotoStore = (event) => {
    // Stop the form from submitting
    event.preventDefault();
    // Get Text from input
    const storeName = this.myInput.current.value;
    //Direct the page to /store/what-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.gotoStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Enter Store"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store </button>
      </form>
    );
  }
}

export default StorePicker;
