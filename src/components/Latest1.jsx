import React, { Component } from "react";

import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardGroup
} from "reactstrap";
import four from "../list/four.png";
import five from "../list/five.png";
import six from "../list/six.png";
import Title from "./Title";

const Latest1 = props => {
  return (
    <CardGroup
      style={{ width: 1200, height: 390, marginLeft: 10, marginTop: 0 }}
    >
      <Card style={{ marginLeft: 150 }}>
        <CardImg top width="10%" src={four} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <b>Store Space Greenville</b>
          </CardTitle>
          <CardText> 250-260 3rd st,Hoboken,NJ 07030,USA</CardText>
          <CardText className="Card1"> $25000/month</CardText>
          <hr />
          <CardText>
            <small className="text-muted">
              <pre>Bed:6 baths:4 Area:987 sq ft </pre>
            </small>
          </CardText>
        </CardBody>
      </Card>
      <Card style={{ marginLeft: 50 }}>
        <CardImg top width="10%" src={five} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <b>Villa in Melbourne</b>
          </CardTitle>
          <CardText>NJ,07305,USA</CardText>
          <CardText className="Card2">$12,000/month</CardText>
          <hr />
          <CardText>
            <small className="text-muted">
              <pre>Bed:8 baths:4 Area:120 sq ft </pre>
            </small>
          </CardText>
        </CardBody>
      </Card>
      <Card style={{ marginLeft: 50 }}>
        <CardImg top width="10%" src={six} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <b>Villa on Hollywood Boulev</b>
          </CardTitle>
          <CardText>The Village,Jersey City,NJ 07302,USA </CardText>
          <CardText className="Card3">$356,000/month</CardText>
          <hr />
          <CardText>
            <small className="text-muted">
              <pre>Bed:1 baths:3 Area:187 sq ft</pre>
            </small>
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Latest1;
