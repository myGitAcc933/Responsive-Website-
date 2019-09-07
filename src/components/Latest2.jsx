import React, { Component } from "react";
import "./Latest.css";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardGroup
} from "reactstrap";
import one from "../overlay/one.png";
import two from "../overlay/two.png";
import three from "../list/three.png";
import Title3 from "./Title3";
import four from "../list/four.png";
import five from "../list/five.png";
import six from "../list/six.png";
import Title from "./Title";

const Latest2 = props => {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <Title3 subtitle="Property By City" />
    </div>
  );
};

export default Latest2;
