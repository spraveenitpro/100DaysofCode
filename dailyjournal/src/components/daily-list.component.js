import React, { Component } from "react";
import axios from "axios";

var divStyle = {
  width: "18rem",
  //display: "inline-block",
};

const Daily = (props) => (
  <div class="card border-primary mb-3 mx-auto " style={divStyle}>
    <div class="card-header">{props.daily.date}</div>
    <div class="card-body text-primary">
      <h5 class="card-title">{props.daily.mood}</h5>
      <p class="card-text">{props.daily.note}</p>
    </div>
  </div>
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
      <>
        <div class="container">
          <div className="row ">{this.dailyList()}</div>
        </div>
      </>
    );
  }
}

export default Dailies;
