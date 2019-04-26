import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    counter: 0,
    errorMessage: ""
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
      errorMessage: ""
    });
  };

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ errorMessage: "The counter cannot go below zero." });
    }
  };

  render() {
    return (
      <div data-test="app-component" className="App">
        <div data-test="counter-display">
          <h1>The counter is currently {this.state.counter}</h1>
          <h3 className="red">{this.state.errorMessage}</h3>
        </div>
        <button data-test="increment-button" onClick={this.increment}>
          Increment Button
        </button>
        <button data-test="decrement-button" onClick={this.decrement}>
          Decrement Button
        </button>
      </div>
    );
  }
}

export default App;
