import React, { Component } from "react";
import "./Footer.css";
import Button from "react-bootstrap/Button";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <h1 className="text-muted">
            Join our professional team and agents
            <br /> to start selling your house
          </h1>
          <h6 className="footer2">
            Lorem ipsum dolor sit amet,consectetur adipisicing elit
          </h6>
        </div>
        <div className="footer3">
          <Button variant="success">Success</Button>
          <Button variant="outline-success">Success</Button>
        </div>
      </footer>
    );
  }
}

export default Footer;
