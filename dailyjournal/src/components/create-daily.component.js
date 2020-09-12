import React, { useState } from "react";
import axios from "axios";

function CreateDaily() {
  /*   state = {
    date: new Date(),
    mood: "",
    notes: "",
  }; */

  const [values, setValues] = useState({
    date: new Date(),
    mood: "",
    notes: "",
  });

  const handleMoodChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      mood: event.target.value,
    }));
  };

  const handleNoteChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      notes: event.target.value,
    }));
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Mood</label>
          <input
            type="text"
            onChange={handleMoodChange}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter how you feel"
            value={values.mood}
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
            onChange={handleNoteChange}
            value={values.notes}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Enter Daily Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateDaily;
