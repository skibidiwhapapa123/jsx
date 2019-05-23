import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  handleIncrement = () => {
    console.log("Clicked");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btm-sm m-2"
        >
          Přidat
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "nula" : count;
  }
}
export default Counter;
