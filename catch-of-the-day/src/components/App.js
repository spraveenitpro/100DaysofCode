import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // Take a copy of existing state
    const fishes = { ...this.state.addFish };
    alert(typeof fishes);
    // Add New fish to the fishes object
    fishes[`fish${Date.now()}`] = fish;

    // Set the new fishes object to state
    this.setState({
      fishes,
    });
  };

  loadSampleFishes = () => {
    // alert("Loading sample");
    this.setState({
      fishes: sampleFishes,
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Praveen is most cool" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
        <Order />
      </div>
    );
  }
}

export default App;