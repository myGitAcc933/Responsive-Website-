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
import one from "../blog/one.png";
import two from "../blog/two.png";
import three1 from "../blog/three1.png";
import Title4 from "./Title4";
import three from "../user/three.jpg";
import four from "../user/four.jpg";
import five from "../user/five.jpg";
import { Alert } from "reactstrap";

const Latest4 = props => {
  return (
    <CardTitle style={{ textAlign: "center", marginTop: 100 }}>
      <Title4 Bigtitle="Blogs We Wrote For You" />

      <CardGroup
        style={{ width: 1200, height: 390, marginLeft: 10, marginTop: 0 }}
      >
        <Card style={{ marginLeft: 150 }}>
          <CardImg top width="10%" src={one} alt="Card image cap" />
          <CardBody>
            <Alert color="primary" style={{ width: 150 }}>
              HOUSE/VILLA!
            </Alert>
            <CardTitle>
              <b>Possimus aut mollitia eum ipsum</b>
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit possimus
              aut mollitia eum ipsum fuglat adio officiis odit{" "}
            </CardText>
            <hr />
            <CardText className="name">
              <img src={three} className="image" />
              <small className="text-muted">
                <pre>Rahul Yavad on October 03,2018 </pre>
              </small>
            </CardText>
          </CardBody>
        </Card>
        <Card style={{ marginLeft: 50 }}>
          <CardImg top width="10%" src={two} alt="Card image cap" />
          <CardBody>
            <Alert color="warning" style={{ width: 200 }}>
              SHOP/SHOWROOM!
            </Alert>
            <CardTitle>
              <b>Consectetur adipisicing elit</b>
            </CardTitle>
            <CardText>
              Cnsectetur ipsum dolor sit amet, consectetur adipisicing elit.
              Possimus aut moilitia eum ipsum fugiat odio officils odit
            </CardText>
            <hr />
            <CardText className="name1">
              <img src={four} className="image2" />
              <small className="text-muted">
                <pre>Rahul Yadav on October 05,2018</pre>
              </small>
            </CardText>
          </CardBody>
        </Card>
        <Card style={{ marginLeft: 50 }}>
          <CardImg top width="10%" src={three1} alt="Card image cap" />
          <CardBody>
            <Alert color="primary" style={{ width: 250 }}>
              INDUSTRIAL BUILDING!
            </Alert>
            <CardTitle>
              <b>Fugiat odio officlis odit</b>
            </CardTitle>
            <CardText>
              Mollitia ipsum dolor sit amet,consectetur adipisicing
              elit.Possimus aut mollitia eum ipsum fugiat odio officiis odit{" "}
            </CardText>

            <hr />
            <CardText className="name">
              <img src={five} className="image2" />
              <small className="text-muted">
                <pre>Rahul Yadav on October 06,2018</pre>
              </small>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </CardTitle>
  );
};

export default Latest4;
