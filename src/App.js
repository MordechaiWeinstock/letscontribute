import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import RandomFunction from "./components/Luke";
import Mordechai from "./components/Mordechai";
import Niall from "./components/Niall";
import Picture from "./components/Picture";

import { Gareth } from "./components/Gareth"
import Sara from "./components/Sara";
import myName from './components/Adam';


class App extends Component {
  state = {
    dan: "Dan Krishnan",
    mordechai: "Mordechai Weinstock",
    luke: "Luke Stobbart",
    nat: "Natalia",
    gareth: "Gareth Scott",
    adam: 'Adam Horscraft',
    nat: "Natalia",
    niall: "Niall",
    nat: "Natalia",
    sara: "Sara",
    pic: "https://picsum.photos/200/300",

  };

  render() {
    const { luke, sara, pic } = this.state;
    return (
      <div className="App">
        <Card name={this.state.dan} />
        <RandomFunction luke={luke} />
        <Picture />
        <Card name={this.state.dan} />
        <Card name={this.state.nat} />

        <Card name={this.state.adam} />
        <Niall name={this.state.niall} />
        <Picture />
        <Card name={this.state.dan} />
        <Card name={this.state.nat} />
        <Sara sara={sara} pic={pic} />
        <Mordechai name={this.state.mordechai} />

        <Gareth gareth={this.state.gareth} />
      </div >
    );
  }
}

export default App;
