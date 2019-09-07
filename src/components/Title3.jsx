import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.subtitle}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
    );
  }
}

export default Title;
