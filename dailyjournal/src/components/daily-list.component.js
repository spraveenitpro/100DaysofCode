/* import React, { useEffect, useState } from "react";
import axios from "axios";

function DailyList() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:6000/daily/")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <p>This is the list of Dailies</p>;
}

export default DailyList; */

import React, { Component } from "react";
import axios from "axios";

const Daily = (props) => (
  <tr>
    <td>{props.daily.date}</td>
    <td>{props.daily.mood}</td>
    <td>{props.daily.note}</td>
  </tr>
);

class Dailies extends Component {
  state = {
    dailies: [],
  };

  componentDidMount() {
    this.getDaily();
  }

  getDaily = () => {
    axios
      .get("http://localhost:3001/daily")
      .then((res) => {
        if (res.data) {
          this.setState({ dailies: res.data });
          //console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  dailyList() {
    return this.state.dailies.map((currentdaily) => {
      return <Daily daily={currentdaily} key={currentdaily._id} />;
    });
  }

  render() {
    //let { dailies } = this.state;
    return (
      <div>
        <h1> Daily Journal</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Date</th>
              <th>Mood</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>{this.dailyList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Dailies;
