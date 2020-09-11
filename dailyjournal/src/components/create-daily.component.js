import React, { Component } from "react";
import axios from "axios";

class CreateDaily extends Component {
  state = {
    date: new Date(),
    mood: "",
    notes: "",
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Mood</label>
            <input
              type="text"
              onchange={this.handleChange}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter how you feel"
              value={this.state.mood}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">
              Enter the highlights for the day
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onchange={this.handleChange}
              value={this.state.notes}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateDaily;
