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
import one from "../one.png";
import two from "../list/two.png";
import three from "../list/three.png";
import Title from "./Title";

const Latest = props => {
  return (
    <CardTitle style={{ textAlign: "center", marginTop: 560 }}>
      <Title subtitle="Latest Properties" />

      <CardGroup
        style={{ width: 1200, height: 390, marginLeft: 10, marginTop: 0 }}
      >
        <Card style={{ marginLeft: 150 }}>
          <CardImg top width="10%" src={one} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <b>House in Kent Street</b>
            </CardTitle>
            <CardText> 127 Kent Street,Sydny,NEW 2000</CardText>
            <CardText className="Card1"> $1300/month</CardText>
            <hr />
            <CardText>
              <small className="text-muted">
                <pre>Bed:3 baths:2 Area:587 sq ft </pre>
              </small>
            </CardText>
          </CardBody>
        </Card>
        <Card style={{ marginLeft: 50 }}>
          <CardImg top width="10%" src={two} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <b>Family House In Hudson</b>
            </CardTitle>
            <CardText>Hoboken,NJ,USA</CardText>
            <CardText className="Card2">$127,000/month</CardText>
            <hr />
            <CardText>
              <small className="text-muted">
                <pre>Bed:5 baths:3 Area:300 sq ft </pre>
              </small>
            </CardText>
          </CardBody>
        </Card>
        <Card style={{ marginLeft: 50 }}>
          <CardImg top width="10%" src={three} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <b>Loft Above The City</b>
            </CardTitle>
            <CardText>Hope Street(Stop P),London SW11,UK </CardText>
            <CardText className="Card3">$55000/month</CardText>
            <hr />
            <CardText>
              <small className="text-muted">
                <pre>Bed:2 baths:1 Area:100 sq ft</pre>
              </small>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </CardTitle>
  );
};

export default Latest;
